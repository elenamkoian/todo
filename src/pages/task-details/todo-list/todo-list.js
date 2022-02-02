import { TodoListItem } from './todo-list-item/todo-list-item';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    TodoList: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(1.25),
    },
  }
));

export const TodoList = ({ task, onDeleteTodo }) => {
  const classes = useStyles();
  return (
    <PatchStyles classNames={classes}>
      <div className="TodoList">
        {
          task.todos.map((todo) => (
            <TodoListItem
              key={todo.uid}
              todo={todo}
              onDeleteTodo={() => onDeleteTodo(todo.uid)}
            />
          ))
        }
      </div>
    </PatchStyles>
  );
};
