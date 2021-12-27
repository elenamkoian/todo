import './page-content.scss';
import { TaskList } from './task-list/task-list';
import { TaskDetails } from './task-details/task-details';
import { Component } from 'react';
import { CreateTaskForm } from './create-task-form/create-task-form';

export class PageContent extends Component {
  state = {
    taskList: JSON.parse(localStorage.getItem('taskList')) ?? [],
    selectedTaskIndex: 0,
    isCreateTaskFormVisible: false,
  };

  render() {
    const selectedTaskInfo = this.state.taskList[this.state.selectedTaskIndex];
    const isCreateTaskFormVisible = this.state.isCreateTaskFormVisible;

    return (
      <div className="PageContent">
        <TaskList
          taskList={this.state.taskList}
          activeTaskId={this.state.selectedTaskIndex}
          onSelectedTaskClick={(index) => this.handleSelectedTask(index)}
          onCreateTaskFormVisibilityChange={this.handleCreateTaskFormVisibilityChange}
          onDeleteTask={(index) => this.handleDeleteTask(index)}
        />

        {
          selectedTaskInfo && (
            <TaskDetails
              task={selectedTaskInfo}
              onNewTodo={this.handleNewTodo}
              onDeleteTodo={(index) => this.handleTodoDelete(index)}
            />
          )
        }

        {
          isCreateTaskFormVisible && (
            <CreateTaskForm
              onNewTaskSave={this.handleNewTaskSave}
              onNewTodo={this.handleNewTodo}
              onCancelNewTask={this.handleCancelNewTask}
            />
          )
        }

      </div>
    );
  }

  handleCreateTaskFormVisibilityChange = () => {
    if (!this.state.isCreateTaskFormVisible) {
      this.setState({
        selectedTaskIndex: null,
      });
    }
    this.setState({
      isCreateTaskFormVisible: !this.state.isCreateTaskFormVisible,
    });
  };

  handleNewTaskSave = (newTask) => {
    const taskList = [...this.state.taskList, newTask];
    this.setState({ taskList });
    localStorage.setItem('taskList', JSON.stringify((taskList)));
  };

  handleCancelNewTask = () => {
    this.setState({ isCreateTaskFormVisible: false });
  };

  handleSelectedTask = (index) => {
    this.setState({
      selectedTaskIndex: index,
      isCreateTaskFormVisible: false,
    });
  };

  handleTodoDelete(index) {
    const taskList = [...this.state.taskList];
    const selectedTask = taskList[this.state.selectedTaskIndex];
    selectedTask.todos.splice(index, 1);
    this.setState({
      taskList,
    });
    localStorage.setItem('taskList', JSON.stringify(taskList));
  };

  handleNewTodo = (newTodoName) => {
    const newTodo = { name: newTodoName, isDone: false };
    const taskList = [...this.state.taskList];
    const selectedTask = taskList[this.state.selectedTaskIndex];

    selectedTask.todos = [...selectedTask.todos, newTodo];
    localStorage.setItem('taskList', JSON.stringify(taskList));
    this.setState({
      taskList,
    });
  };

  handleDeleteTask(index) {
    const taskList = [...this.state.taskList];
    taskList.splice(index, 1);
    this.setState({
      taskList,
    });
    localStorage.setItem('taskList', JSON.stringify(taskList));
  };
}
