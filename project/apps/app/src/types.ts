export interface Pokemon {
  name: string;
  url: string;
  id: number;
}

export interface reduxState {
  pokemonList: Pokemon[];
  loading: boolean;
  error: string | null;
}

export interface PokemonCardProps {
  pokemon: Pokemon;
}
