import './task-list.scss';
import { TaskListItem } from './task-list-item/task-list-item';
import { CreateTaskListItem } from './create-task-list-item/create-task-list-item';

export const TaskList = ({ taskList, onSelectedTaskClick, activeTaskId, onCreateTaskFormVisibilityChange }) => {
  return (
    <div className="TaskList">
      {
        taskList.map((task, index) => (
          <TaskListItem
            key={index}
            task={task}
            isActive={activeTaskId === index}
            onSelectedTaskClick={() => onSelectedTaskClick(index)}
          />
        ))
      }
      <CreateTaskListItem onCreateTaskFormVisibilityChange={onCreateTaskFormVisibilityChange} />
    </div>
  );
};
