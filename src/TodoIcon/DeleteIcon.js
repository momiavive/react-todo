import { TodoIcon } from "."

function DeleteIcon({ onDelete }) {
  return (
    <TodoIcon 
      type="delete"
      color="red"
      onPress={onDelete}
    />
  );
}

export { DeleteIcon };