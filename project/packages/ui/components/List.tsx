import React, { useEffect, useState } from "react";
import PokemonNames from "./PokemonNames";
import { Pokemon } from "../types/types";

interface MyProps {
  api: string;
}

export const List = ({ api }: MyProps) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  //Get data from Pokemon APi
  useEffect(() => {
    console.log(api);

    getDataFromPokemonApi();
  }, []);

  const getDataFromPokemonApi = async () => {
    try {
      const response = await fetch(api);
      const json = await response.json();
      const pokemonList: Pokemon[] = json.results.map(
        (item: any, index: number) => ({
          id: index + 1,
          name: item.name,
          url: item.url,
        })
      );
      setPokemonList(pokemonList);
      setLoading(false);

      if (!response.ok) {
        throw new Error("Failed to fetch Pokémon data");
      }
    } catch (err: any) {
      console.log(err.message);
      setLoading(false);
    }
  };
  if (loading) {
    return <p>Loading...</p>;
  }

  console.log(pokemonList);

  return (
    <div>
      <ul>
        {pokemonList.map((pokemon: any) => (
          <PokemonNames key={pokemon.id} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  );
};
