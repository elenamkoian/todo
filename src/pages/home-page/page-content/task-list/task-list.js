import './task-list.scss';
import { TaskListItem } from './task-list-item/task-list-item';
import { CreateTaskListItem } from './create-task-list-item/create-task-list-item';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../../store';
import { selectTaskList } from '../../../../store/selectors';

export const TaskList = ({ onSelectedTaskClick, activeTaskId, onCreateTaskFormVisibilityChange }) => {
  const taskList = useSelector(selectTaskList)
  const dispatch = useDispatch();
  const handleDeleteTask = (index)  => {
      dispatch({ type: actions.deleteTask, payload: index })
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
