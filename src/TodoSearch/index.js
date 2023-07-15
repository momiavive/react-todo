import { useContext } from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  return (
    <input
      value={searchValue}
      placeholder="Cortar cebolla"
      className="TodoSearch"
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
