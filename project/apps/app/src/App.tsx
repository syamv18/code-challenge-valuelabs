import { List } from "ui";

const api = "https://pokeapi.co/api/v2/pokemon?limit=151";

const App = () => {
  return (
    <>
      <h1>Pokemon list:</h1>
      <List api={api} />
    </>
  );
};

export default App;
