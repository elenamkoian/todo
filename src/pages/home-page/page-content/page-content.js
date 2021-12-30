import './page-content.scss';
import { TaskList } from './task-list/task-list';
import { TaskDetails } from './task-details/task-details';
import { CreateTaskForm } from './create-task-form/create-task-form';
import { useState } from 'react';
import { selectTaskList } from '../../../store/selectors';
import { useSelector } from 'react-redux';

export const PageContent = () => {
  const taskList = useSelector(selectTaskList)
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(0);
  const [isCreateTaskFormVisible, setIsCreateTaskFormVisible] = useState(false);

  const selectedTaskInfo = taskList[selectedTaskIndex];

  const handleCreateTaskFormVisibilityChange = () => {
    if (!isCreateTaskFormVisible) {
      setSelectedTaskIndex(null);
    }
    setIsCreateTaskFormVisible(!isCreateTaskFormVisible);
  };

  const handleCloseNewTaskForm = () => setIsCreateTaskFormVisible(false);

  const handleSelectedTask = (index) => {
    setSelectedTaskIndex(index);
    setIsCreateTaskFormVisible(false);
  };

  return (
    <div className="PageContent">
      <TaskList
        activeTaskId={selectedTaskIndex}
        onSelectedTaskClick={(index) => handleSelectedTask(index)}
        onCreateTaskFormVisibilityChange={handleCreateTaskFormVisibilityChange}
      />

      {
        selectedTaskInfo && (
          <TaskDetails selectedTaskIndex={selectedTaskIndex} />
        )
      }

      {
        isCreateTaskFormVisible && (
          <CreateTaskForm
            onClose={handleCloseNewTaskForm}
          />
        )
      }

    </div>
  );
};
