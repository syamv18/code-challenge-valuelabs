import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";
import { fetchPokemon } from "../Redux/api";
import PokemonCard from "./PokemonCard";
import { Pokemon } from "../types";
const PokemonList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { pokemonList, loading, error } = useSelector(
    (state: RootState) => state.pokemon
  );

  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);

  if (loading) {
    return <p>Loading Pokémon...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  console.log(pokemonList);

  return (
    <div className="app">
      <div className="pokemon-list">
        {pokemonList.map((pokemon: Pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
