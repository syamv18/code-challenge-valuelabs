import React from "react";
import { PokemonCardProps } from "../types/types";

const PokemonNames: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <h3>{pokemon.name}</h3>
        
    </div>
  );
};
export default PokemonNames;
