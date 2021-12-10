import './task-list.scss';
import { TaskListItem } from './task-list-item/task-list-item';

export const TaskList = ({ taskList, onSelectedTaskClick, activeTaskId }) => {

  return (
    <div className="TaskList">
      {
        taskList.map((task, index) => (
            <TaskListItem
              key={index}
              task={task}
              isActive={activeTaskId ===index}
              onSelectedTaskClick={() => onSelectedTaskClick(index)}
            />
        ))
      }
    </div>
  );
};
