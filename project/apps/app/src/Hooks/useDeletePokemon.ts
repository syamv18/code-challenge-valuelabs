import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { deletePokemon } from "../Redux/pokemonSlice";

export const useDeletePokemon = () => {
  const dispatch = useDispatch();

  const handleDelete = useCallback(
    (id: number) => {
      dispatch(deletePokemon(id));
    },
    [dispatch]
  );

  return handleDelete;
};
