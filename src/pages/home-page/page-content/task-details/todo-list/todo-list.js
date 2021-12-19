import { TodoListItem } from './todo-list-item/todo-list-item';
import './todo-list.scss';

export const TodoList = ({ task, onNewTodo, onDeleteTodo }) => {
  return (
    <div className="TodoList">
      {
        task.todos.map((todo, index) => (
          <TodoListItem
            key={index}
            name={todo.name}
            isDone={todo.isDone}
            onNewTodo={onNewTodo}
            onDeleteTodo={() => onDeleteTodo(index)}
          />
        ))
      }
    </div>
  );
};
