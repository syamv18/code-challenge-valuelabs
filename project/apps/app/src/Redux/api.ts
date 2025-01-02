import { createAsyncThunk } from "@reduxjs/toolkit";
import { Pokemon } from "../types";

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      const data = await response.json();

      // Transform the API response into our Pokémon structure
      return data.results.map((item: Pokemon, index: number) => ({
        id: index + 1,
        name: item.name,
      }));
    } catch (error) {
      return (error as Error).message || "An unknown error occurred";
    }
  }
);
