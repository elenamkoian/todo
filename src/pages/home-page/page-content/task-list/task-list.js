import './task-list.scss';
import { TaskListItem } from './task-list-item/task-list-item';

export const TaskList = ({ taskList }) => {

  return (
    <div className="TaskList">
      {
        taskList.map((task, index) => (
          <TaskListItem key={index} task={task} />
        ))
      }
    </div>
  );
};
