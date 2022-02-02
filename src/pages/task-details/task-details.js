import { TaskInfo } from '../../components/task-info/task-info';
import { TodoList } from './todo-list/todo-list';
import { CreateTodoListItem } from './todo-list/create-todo-list-item/create-todo-list-item';
import { useParams } from 'react-router-dom';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';
import { Divider } from '../../components/divider/divider';
import { useCreateTodoMutation, useDeleteTodoMutation, useFetchTaskListQuery } from '../../store/services/tasks.service';
import genUid from 'light-uid';

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
  const [createTodo] = useCreateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const { taskUid } = useParams();

  const { data: task } = useFetchTaskListQuery(null, {
    selectFromResult: ({ data, ...otherInfo }) => ({
      data: data && ({
        ...data[taskUid],
        todos: Array.from(Object.values(data[taskUid].todos ?? {})),
      }),
      ...otherInfo,
    }),
  });

  const handleDeleteTodo = (todoUid) => {
    deleteTodo({ taskUid, todoUid });
  };

  const handleNewTodo = (newTodoName) => {
    createTodo({
      taskUid,
      todo: {
        uid: genUid(),
        name: newTodoName,
        isDone: false,
      },
    });
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
