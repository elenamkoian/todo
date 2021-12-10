import { TodoListItem } from './todo-list-item/todo-list-item';
import './todo-list.scss';

export const TodoList = ({ taskList }) => {
  return (
    <div className="TodoList">
      {
        taskList[0].todos.map((todo, index) => (
          <TodoListItem
            name={todo.name}
            isDone={todo.isDone}
            key={index}
          />
        ))
      }
    </div>
  );
};
