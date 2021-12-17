import { TodoListItem } from './todo-list-item/todo-list-item';
import './todo-list.scss';

export const TodoList = ({ task, onNewTodo }) => {
  return (
    <div className="TodoList">
      {
        task.todos.map((todo, index) => (
          <TodoListItem
            name={todo.name}
            isDone={todo.isDone}
            key={index}
            onNewTodo={onNewTodo}
          />
        ))
      }
    </div>
  );
};
