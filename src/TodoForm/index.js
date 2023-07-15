import { useContext, useState } from "react";
import { TodoContext } from "../TodoContext"
import "./TodoForm.css";

function TodoForm() {
  const { setOpenModal, addTodo } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");

  const onCancel = (event) => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea 
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar cebolla para el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button 
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >Cancelar</button>
        <button 
          className="TodoForm-button TodoForm-button--add"
        >Añadir</button>
      </div>
    </form>
  );
}

export { TodoForm };