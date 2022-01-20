import * as classes from './tasl-list-item.module.scss';
import { TaskInfo } from '../../../../components/task-info/task-info';
import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { tasksSlice } from '../../../../store';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import PatchStyles from 'patch-styles';

export const TaskListItem = ({ task }) => {
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
