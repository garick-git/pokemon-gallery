import { Pokemon } from '../types';

interface PokemonCardProps {
  pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const displayedStats = ['hp', 'attack', 'defense', 'speed'];

  const filteredStats = pokemon.stats.filter((stat) =>
    displayedStats.includes(stat.stat.name)
  );

  return (
    <div className="bg-gray-100 p-3 flex gap-3 flex-col hover:scale-105 transition border-2 rounded-md border-gray-200 justify-center w-3/4">
      {/* Image */}
      <img
        className="rounded-t border-b-2 border-gray-300"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      {/* Name and ID Section */}
      <div className="flex flex-row gap-2 items-center">
        <h3 className="capitalize text-2xl text-gray-950">{pokemon.name}</h3>
        <p className="text-gray-500 text-sm">#{pokemon.id}</p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 gap-3 text-gray-800">
        {filteredStats.map((stat) => (
          <div
            className={`flex flex-row justify-between items-center p-2 rounded bg-gradient-to-r from-gray-50 ${
              {
                hp: 'to-green-300',
                attack: 'to-red-300',
                defense: 'to-blue-300',
                speed: 'to-yellow-300',
              }[stat.stat.name]
            }`}
            key={stat.stat.name}
          >
            <p className="uppercase text-sm" aria-label={stat.stat.name}>
              {stat.stat.name.slice(0, 3)}
            </p>
            <p className="text-lg">{stat.base_stat}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
