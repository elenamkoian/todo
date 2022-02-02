import { TaskInfo } from '../../../../components/task-info/task-info';
import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import { useDeleteTaskMutation } from '../../../../store/services/tasks.service';
import { WithLoader } from '../../../../components/with-loader';

const useStyles = makeStyles((theme) => ({
    TaskListItem: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.spacing(2),
      minWidth: theme.spacing(52),
      cursor: 'pointer',
      position: 'relative',
      textDecoration: 'none',
      height: 'auto',
    },
    DeleteTaskListItem: {
      cursor: 'pointer',
      color: theme.palette.text.primary,
      position: 'absolute',
      top: 0,
      right: 0,
    },
    Active: {
      border: '1px solid #383B41',
    },
  }
));

export const TaskListItem = ({ task }) => {
  const [deleteTask, { isLoading }] = useDeleteTaskMutation();
  const classes = useStyles();
  const navigate = useNavigate();

  const handleDeleteTask = (ev) => {
    ev.preventDefault();
    deleteTask(task.uid);
    navigate('/');
  };

  return (
    <NavLink
      to={`/${task.uid}`}
      className={({ isActive }) => clsx(classes.TaskListItem, { [classes.Active]: isActive })}
    >
      <TaskInfo task={task} />

      <WithLoader isLoading={isLoading} className={classes.DeleteTaskListItem}>
        <IconButton
          className={classes.DeleteTaskListItem}
          size="small"
          onClick={handleDeleteTask}
        >
          <Close />
        </IconButton>
      </WithLoader>
    </NavLink>
  );
};
