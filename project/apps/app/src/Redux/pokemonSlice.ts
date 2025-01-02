import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchPokemon } from "./api";
import { reduxState } from "../types";

const initialState: reduxState = {
  pokemonList: [],
  loading: false,
  error: null,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    deletePokemon: (state, action: PayloadAction<number>) => {
      state.pokemonList = state.pokemonList.filter(
        (pokemon) => pokemon.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.loading = false;
        state.pokemonList = action.payload;
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch Pokémon data";
      });
  },
});

export const { deletePokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
