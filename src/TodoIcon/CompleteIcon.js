import { TodoIcon } from ".";

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon 
      type="complete"
      color={completed ? "green" : "gray"}
      onPress={onComplete}
    />
  );
}

export { CompleteIcon };