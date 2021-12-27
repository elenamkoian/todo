import './page-content.scss';
import { TaskList } from './task-list/task-list';
import { TaskDetails } from './task-details/task-details';
import { CreateTaskForm } from './create-task-form/create-task-form';
import { useState } from 'react';

export const PageContent = () => {
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('taskList')) ?? []);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(0);
  const [isCreateTaskFormVisible, setIsCreateTaskFormVisible] = useState(false);

  const selectedTaskInfo = taskList[selectedTaskIndex];

  const handleCreateTaskFormVisibilityChange = () => {
    if (!isCreateTaskFormVisible) {
      setSelectedTaskIndex(null);
    }
    setIsCreateTaskFormVisible(!isCreateTaskFormVisible);
  };

  const handleNewTaskSave = (newTask) => {
    const newTaskList = [...taskList, newTask];
    // this.setState({ taskList });
    setTaskList(newTaskList);
    localStorage.setItem('taskList', JSON.stringify((newTaskList)));
  };

  const handleCancelNewTask = () => {
    // this.setState({ isCreateTaskFormVisible: false });
    setIsCreateTaskFormVisible(false);
  };

  const handleSelectedTask = (index) => {
    // this.setState({
    //   selectedTaskIndex: index,
    //   isCreateTaskFormVisible: false,
    // });
    setSelectedTaskIndex(index);
    setIsCreateTaskFormVisible(false);
  };

  const handleTodoDelete = (index) => {
    const newTaskList = [...taskList];
    const selectedTask = newTaskList[selectedTaskIndex];
    selectedTask.todos.splice(index, 1);
    // this.setState({
    //   taskList,
    // });
    setTaskList(newTaskList);
    localStorage.setItem('taskList', JSON.stringify(newTaskList));
  };

  const handleNewTodo = (newTodoName) => {
    const newTodo = { name: newTodoName, isDone: false };
    // const taskList = [...this.state.taskList]; // ??
    const newTaskList = [...taskList];
    const selectedTask = newTaskList[selectedTaskIndex];

    selectedTask.todos = [...selectedTask.todos, newTodo];
    localStorage.setItem('taskList', JSON.stringify(newTaskList));
    // this.setState({ taskList });
    setTaskList(newTaskList);
  };

  const handleDeleteTask = (index) => {
    const newTaskList = [...taskList]; // ??
    newTaskList.splice(index, 1);
    // this.setState({ taskList });
    setTaskList(newTaskList)
    localStorage.setItem('taskList', JSON.stringify(newTaskList));
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
            onDeleteTodo={(index) => handleTodoDelete(index)}
          />
        )
      }

      {
        isCreateTaskFormVisible && (
          <CreateTaskForm
            onNewTaskSave={handleNewTaskSave}
            onNewTodo={handleNewTodo}
            onCancelNewTask={handleCancelNewTask}
          />
        )
      }

    </div>
  );
};
