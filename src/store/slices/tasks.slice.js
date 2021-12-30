import { createSlice } from '@reduxjs/toolkit';

const getInitialState = () => {
  return {
    allTasks: JSON.parse(localStorage.getItem('taskList')) ?? [],
  };
};

const slice = createSlice({
  name: 'tasks',
  initialState: getInitialState(),
  reducers: {
    deleteTask: (state, { payload: index }) => {
      state.allTasks.splice(index, 1);
    },
    createTAsk: (state, { payload: newTask }) => {
      state.allTasks.push(newTask);
    },
    deleteTodo: (state, { payload }) => {
      const { taskIndex, todoIndex } = payload;
      const selectedTask = state.allTasks[taskIndex];
      selectedTask.todos.splice(todoIndex, 1);
    },
    createTodo: (state, { payload }) => {
      const { taskIndex, newTodoName } = payload;
      const newTodo = { name: newTodoName, isDone: false };
      const selectedTask = state.allTasks[taskIndex];
      selectedTask.todos.push(newTodo);
    },
  },
});

const selectors = {
  selectAll: (state) => state.tasks.allTasks,
  selectByIndex: (state, index) => state.tasks.allTasks[index],
}

export const tasksSlice = {
  ...slice,
  selectors
}
