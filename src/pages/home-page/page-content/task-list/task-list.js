import './task-list.scss';
import { TaskListItem } from './task-list-item/task-list-item';
import { CreateTaskListItem } from './create-task-list-item/create-task-list-item';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSlice } from '../../../../store';

export const TaskList = ({ onSelectedTaskClick, activeTaskId, onCreateTaskFormVisibilityChange }) => {
  const taskList = useSelector(tasksSlice.selectors.selectAll)
  const dispatch = useDispatch();
  const handleDeleteTask = (index)  => {
      dispatch(tasksSlice.actions.deleteTask(index))
  };

  return (
    <div className="TaskList" >
      {
        taskList.map((task, index) => (
          <TaskListItem
            key={index}
            task={task}
            isActive={activeTaskId === index}
            onSelectedTaskClick={() => onSelectedTaskClick(index)}
            onDeleteTask={() => handleDeleteTask(index)}
          />
        ))
      }
      <CreateTaskListItem onCreateTaskFormVisibilityChange={onCreateTaskFormVisibilityChange} />
    </div>
  );
};
