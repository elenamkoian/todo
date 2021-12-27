import './tasl-list-item.scss';
import { TaskInfo } from '../../../../../components/task-info/task-info';
import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const TaskListItem = ({ task, isActive, onSelectedTaskClick, onDeleteTask }) => {
  const handleDeleteButtonClick = (ev) => {
    ev.stopPropagation();
    return onDeleteTask();
  };

  return (
    <div
      className={`TaskListItem ${isActive ? 'Active' : ''}`}
      onClick={() => onSelectedTaskClick()}
    >
      <TaskInfo task={task} />
      <IconButton
        className="TaskListItemRemove"
        size="small"
        onClick={handleDeleteButtonClick}
      >
        <Close />
      </IconButton>
    </div>
  );
};
