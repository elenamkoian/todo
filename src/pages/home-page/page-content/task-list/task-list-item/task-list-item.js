import './tasl-list-item.scss';
import { TaskInfo } from '../../../../../components/task-info/task-info';

export const TaskListItem = ({ task, onSelectedTaskClick, isActive }) => {
  return (
    <div className={`TaskListItem ${isActive ? 'Active' : ''}`} onClick={() => onSelectedTaskClick()}>
      <TaskInfo task={task} />
    </div>
  );
};
