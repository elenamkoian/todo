import './page-content.scss';
import { TaskList } from './task-list/task-list';
import { TaskDetails } from './task-details/task-details';
import { CreateTaskForm } from './create-task-form/create-task-form';
import { useState } from 'react';

export const PageContent = () => {
  const [taskList, setTaskList] = useState(() => {
    return JSON.parse(localStorage.getItem('taskList')) ?? [];
  });
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(0);
  const [isCreateTaskFormVisible, setIsCreateTaskFormVisible] = useState(false);

  const selectedTaskInfo = taskList[selectedTaskIndex];

  const handleCreateTaskFormVisibilityChange = () => {
    if (!isCreateTaskFormVisible) {
      setSelectedTaskIndex(null);
    }
    setIsCreateTaskFormVisible(!isCreateTaskFormVisible);
  };

  const handleSaveNewTask = (newTask) => {
    const newTaskList = [...taskList, newTask];

    localStorage.setItem('taskList', JSON.stringify(newTaskList));
    setIsCreateTaskFormVisible(false);
    setTaskList(newTaskList);
  };

  const handleCancelNewTask = () => setIsCreateTaskFormVisible(false);

  const handleSelectedTask = (index) => {
    setSelectedTaskIndex(index);
    setIsCreateTaskFormVisible(false);
  };

  const handleDeleteTodo = (index) => {
    const newTaskList = [...taskList];
    const selectedTask = newTaskList[selectedTaskIndex];
    selectedTask.todos.splice(index, 1);

    localStorage.setItem('taskList', JSON.stringify(newTaskList));
    setTaskList(newTaskList);
  };

  const handleNewTodo = (newTodoName) => {
    const newTodo = { name: newTodoName, isDone: false };
    const newTaskList = [...taskList];
    const selectedTask = newTaskList[selectedTaskIndex];

    selectedTask.todos = [...selectedTask.todos, newTodo];

    localStorage.setItem('taskList', JSON.stringify(newTaskList));
    setTaskList(newTaskList);
  };

  const handleDeleteTask = (index) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);

    localStorage.setItem('taskList', JSON.stringify(newTaskList));
    setTaskList(newTaskList)
  };

  return (
    <div className="PageContent">
      <TaskList
        taskList={taskList}
        activeTaskId={selectedTaskIndex}
        onSelectedTaskClick={(index) => handleSelectedTask(index)}
        onCreateTaskFormVisibilityChange={handleCreateTaskFormVisibilityChange}
        onDeleteTask={(index) => handleDeleteTask(index)}
      />

      {
        selectedTaskInfo && (
          <TaskDetails
            task={selectedTaskInfo}
            onNewTodo={handleNewTodo}
            onDeleteTodo={(index) => handleDeleteTodo(index)}
          />
        )
      }

      {
        isCreateTaskFormVisible && (
          <CreateTaskForm
            onSaveNewTask={handleSaveNewTask}
            onNewTodo={handleNewTodo}
            onCancelNewTask={handleCancelNewTask}
          />
        )
      }

    </div>
  );
};
