'use client';

import { Pokemon } from '../types';
import { useEffect, useState } from 'react';
import PokemonCard from '@/components/PokemonCard';
import AssignmentSummary from '@/components/AssignmentSummary';

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function fetchPokemonList() {
      setIsLoading(true);
      try {
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
        );
        if (!response.ok) {
          throw new Error(`Error fetching Pokémon ${response.status}`);
        }

        const { results } = await response.json();

        // fetching the details for each Pokémon in pokemonList. Promise.all makes performance faster as it does not have to wait for all 20 results to load.
        const detailedPokemonList = await Promise.all(
          results.map(async (pokemon: { url: string }) => {
            const res = await fetch(pokemon.url);
            if (!res.ok) {
              throw new Error(
                `Error fetching details for pokemon! ${res.status}`
              );
            }

            return res.json();
          })
        );

        setPokemonList(detailedPokemonList);
      } catch (err) {
        setErrorMessage(err instanceof Error ? err.message : 'Unknown Error');
      } finally {
        setIsLoading(false);
      }
    }

    fetchPokemonList();
  }, []);

  return (
    <main
      aria-label="Pokémon Display Page"
      className="p-3 bg-gray-50 flex flex-col gap-5"
    >
      <h1 className="text-xl text-gray-950">Pokémon Results</h1>

      <AssignmentSummary />

      <div aria-label="Pokémon Results">
        {isLoading ? (
          // show loading while the results are being fetched.
          <p aria-live="polite"> Content is loading... </p>
        ) : errorMessage ? (
          // any errors? Show the error message.
          <p className="text-red-500" role="alert">
            {errorMessage}
          </p>
        ) : (
          // Showing the results
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center">
              {pokemonList.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              ))}
            </div>
            <p className="text-sm text-center text-gray-500">
              Showing {pokemonList.length} results
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
