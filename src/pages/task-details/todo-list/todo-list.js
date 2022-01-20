import { TodoListItem } from './todo-list-item/todo-list-item';
import * as classes from './todo-list.module.scss';
import PatchStyles from 'patch-styles';

export const TodoList = ({ task, onDeleteTodo }) => {
  return (
    <PatchStyles classNames={classes}>
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
    </PatchStyles>
  );
};
