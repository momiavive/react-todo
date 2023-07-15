import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { useContext } from 'react';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoContext } from '../TodoContext';

function AppUi() {
  const { 
    loading,
    error,
    foundTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
            {loading && (<><TodosLoading /><TodosLoading /><TodosLoading /></>)}
            {error && <TodosError />}
            {(!loading && foundTodos.length === 0) && <EmptyTodos />}
            {foundTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => {
                  completeTodo(todo.text)
                }}
                onDelete={() => {
                  deleteTodo(todo.text)
                }}
              />
            ))}
          </TodoList>

      <CreateTodoButton 
        onClick={() => {
          setOpenModal(!openModal)
        }}
      />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

    </>
  );
}

export { AppUi };