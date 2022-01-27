import { TaskInfo } from '../../components/task-info/task-info';
import { TodoList } from './todo-list/todo-list';
import { CreateTodoListItem } from './todo-list/create-todo-list-item/create-todo-list-item';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSlice } from '../../store';
import { useParams } from 'react-router-dom';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';
import { Divider } from '../../components/divider/divider';

const useStyles = makeStyles((theme) => ({
    TaskDetails: {
      gap: theme.spacing(1.25),
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
    },
  }
));

export const TaskDetails = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { taskUid } = useParams();
  const task = useSelector((state) => tasksSlice.selectors.selectById(state, taskUid));

  const handleDeleteTodo = (todoUid) => {
    dispatch(tasksSlice.actions.deleteTodo({
      taskUid,
      todoUid,
    }));
  };

  const handleNewTodo = (newTodoName) => {
    dispatch(tasksSlice.actions.createTodo({
      taskUid,
      newTodoName,
    }));
  };

  if (!task) {
    return null;
  }

  return (
    <PatchStyles classNames={classes}>
      <div className="TaskDetails">
        <TaskInfo task={task} />
        <Divider />
        <TodoList task={task} onDeleteTodo={handleDeleteTodo} />
        <CreateTodoListItem onNewTodo={handleNewTodo} />
      </div>
    </PatchStyles>
  );
};
