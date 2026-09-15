export interface Stat {
  stat: {
    // skipping .special-attack and .special-defense (out of scope, and to keep TypeScript's type checking clean)
    name: 'hp' | 'attack' | 'defense' | 'speed';
  };
  base_stat: number;
}

export interface Pokemon {
  id: number;
  name: string;
  stats: Stat[];
  sprites: { front_default: string };
}
