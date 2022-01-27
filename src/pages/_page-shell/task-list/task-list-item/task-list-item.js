import { TaskInfo } from '../../../../components/task-info/task-info';
import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { tasksSlice } from '../../../../store';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';

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
    TaskListItemRemove: {
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
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteButtonClick = (ev) => {
    ev.preventDefault();
    dispatch(tasksSlice.actions.deleteTask(task.uid));
    navigate('/');
  };

  return (
    <NavLink
      to={`/${task.uid}`}
      className={({ isActive }) => clsx(classes.TaskListItem, { [classes.Active]: isActive })}
    >
      <TaskInfo task={task} />

      <IconButton
        className={classes.TaskListItemRemove}
        size="small"
        onClick={handleDeleteButtonClick}
      >
        <Close />
      </IconButton>
    </NavLink>
  );
};
