import { TodoListItem } from './todo-list-item/todo-list-item';
import './todo-list.scss';

export const TodoList = ({ task, onDeleteTodo }) => {
  return (
    <div className="TodoList">
      {
        task.todos.map((todo) => (
          <TodoListItem
            key={todo.uid}
            name={todo.name}
            isDone={todo.isDone}
            onDeleteTodo={() => onDeleteTodo(todo.uid)}
          />
        ))
      }
    </div>
  );
};
