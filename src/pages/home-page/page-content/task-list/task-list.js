import './task-list.scss';
import { TaskListItem } from './task-list-item/task-list-item';
import { CreateTaskListItem } from './create-task-list-item/create-task-list-item';
import { useSelector } from 'react-redux';
import { tasksSlice } from '../../../../store';

export const TaskList = () => {
  const taskList = useSelector(tasksSlice.selectors.selectAll);

  return (
    <div className="TaskList">
      {
        taskList.map((task, index) => (
          <TaskListItem
            key={index}
            index={index}
            task={task}
          />
        ))
      }

      <CreateTaskListItem />
    </div>
  );
};
