import React, { useEffect, useState } from "react";

interface MyProps {
  api: string;
}

export const List = ({ api }: MyProps) => {
  const [pokemon, setPokemon] = useState<string[]>([]);

  //Get data from Pokemon APi
  useEffect(() => {
    console.log(api);
    getDataFromPokemonApi();
  }, []);

  const getDataFromPokemonApi = async () => {
    let response = await fetch(api);
    let json = await response.json();
    setPokemon(json?.results);
  };

  console.log(pokemon);

  return <p>List</p>;
};
