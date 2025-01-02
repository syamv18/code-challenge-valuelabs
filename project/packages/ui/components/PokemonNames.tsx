import React from "react";
import { PokemonCardProps } from "../types/types";

import "./index.css";

const PokemonNames: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <div className="grid-container">
        <div className="grid-item name">
          <h3>{pokemon.name}</h3>
        </div>
      </div>
    </div>
  );
};
export default PokemonNames;
