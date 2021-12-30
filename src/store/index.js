import { configureStore } from '@reduxjs/toolkit';
import { produce } from 'immer';

const getInitialState = () => {
  return {
    taskList: JSON.parse(localStorage.getItem('taskList')) ?? [],
  };
};

export const actions = {
  deleteTask: 'DELETE_TASK',
  createTask: 'CREATE_TASK',
  deleteTodo: 'DELETE_TODO',
  createTodo: 'CREATE_TODO',
};

export const store = configureStore({
  reducer: (state, action) => {
    if (!state) {
      return getInitialState();
    }

    switch (action.type) {
      case actions.deleteTask:
        return produce(state, (draft) => {
          const index = action.payload;
          draft.taskList.splice(index, 1);
        });
      
      case actions.createTask:
        return produce(state, (draft) => {
          const newTask = action.payload;
          draft.taskList.push(newTask);
        });


      case actions.deleteTodo:
        return produce(state, (draft) => {
          const { taskIndex, todoIndex } = action.payload;
          const selectedTask = draft.taskList[taskIndex];
          selectedTask.todos.splice(todoIndex, 1);
        });


      case actions.createTodo:
        return produce(state, (draft) => {
          const { taskIndex, newTodoName } = action.payload;
          const newTodo = { name: newTodoName, isDone: false };
          const selectedTask = draft.taskList[taskIndex];
          selectedTask.todos.push(newTodo);

        });

      default:
        return state;
    }
  },
});
