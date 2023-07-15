import { TodoIcon } from "."

function DeleteIcon({ onDelete }) {
  return (
    <TodoIcon 
      type="delete"
      color="gray"
      onPress={onDelete}
    />
  );
}

export { DeleteIcon };