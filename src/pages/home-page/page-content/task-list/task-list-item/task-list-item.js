import './tasl-list-item.scss';
import { TaskInfo } from '../../../../../components/task-info/task-info';
import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { tasksSlice } from '../../../../../store';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

export const TaskListItem = ({ task, index }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteButtonClick = (ev) => {
    ev.preventDefault();
    dispatch(tasksSlice.actions.deleteTask(index));
    navigate('/');
  };

  return (
    <NavLink
      to={`/${index}`}
      className={({ isActive }) => `TaskListItem ${isActive ? 'Active' : ''}`}
    >
      <TaskInfo task={task} />

      <IconButton
        className="TaskListItemRemove"
        size="small"
        onClick={handleDeleteButtonClick}
      >
        <Close />
      </IconButton>
    </NavLink>
  );
};
