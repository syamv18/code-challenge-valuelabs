import React from "react";
import { PokemonCardProps } from "../types";

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <h3>{pokemon.name}</h3>
    </div>
  );
};

export default PokemonCard;
