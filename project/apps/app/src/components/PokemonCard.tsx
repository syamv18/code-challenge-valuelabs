import React from "react";
import { PokemonCardProps } from "../types";
import { useDeletePokemon } from "../Hooks/useDeletePokemon";

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const deletePokemon = useDeletePokemon();

  const handleDelete = () => {
    deletePokemon(pokemon.id);
  };

  return (
    <div
      className="pokemon-card"
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <h3 style={{ margin: "20px" }}> {pokemon.name}</h3>
      <div>
        <button
          style={{ backgroundColor: "red", color: "white" }}
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PokemonCard;
