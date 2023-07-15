import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");

  // Estados derivados 
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const foundTodos = todos.filter(todo => {
    const text = todo.text.toLowerCase();
    const valueToSearch = searchValue.toLowerCase();
    return text.includes(valueToSearch);
  });

  const [openModal, setOpenModal] = useState(false);

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false
    });
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      foundTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      addTodo
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };