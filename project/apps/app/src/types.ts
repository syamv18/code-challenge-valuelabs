export interface Pokemon {
  name: string;
  url: string;
}

export interface reduxState {
  pokemonList: Pokemon[];
  loading: boolean;
  error: string | null;
}

export interface PokemonCardProps {
  pokemon: Pokemon;
}
