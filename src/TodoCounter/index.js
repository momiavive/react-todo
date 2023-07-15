import { useContext } from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext);
  const defaultTitleContent = <>
    Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
  </>;
  const alternativeTitleContent = <>Felicidades! Completaste todo los TODOs!</>;
  return (
    <h1 className="TodoCounter">
        { totalTodos === completedTodos && totalTodos !== 0 ? alternativeTitleContent : defaultTitleContent }
    </h1>
  );
}

export { TodoCounter };