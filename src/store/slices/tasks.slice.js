import { createSlice } from '@reduxjs/toolkit';
import genUid from 'light-uid';

const getInitialState = () => {
  return {
    allTasks: JSON.parse(localStorage.getItem('taskList')) ?? [],
  };
};

const slice = createSlice({
  name: 'tasks',
  initialState: getInitialState(),
  reducers: {
    deleteTask: (state, { payload }) => {
      state.allTasks = state.allTasks.filter((task) => task.uid !== payload);
    },
    createTAsk: (state, { payload: newTask }) => {
      state.allTasks.push({ uid: genUid(), ...newTask });
    },
    deleteTodo: (state, { payload }) => {
      const { taskUid, todoUid } = payload;
      const selectedTask = state.allTasks.find((task) => task.uid === taskUid);
      selectedTask.todos = selectedTask.todos.filter((todo) => todo.uid !== todoUid);
    },
    createTodo: (state, { payload }) => {
      const { taskUid, newTodoName } = payload;
      const newTodo = { uid: genUid(), name: newTodoName, isDone: false };
      const selectedTask = state.allTasks.find((task) => task.uid === taskUid);
      selectedTask.todos.push(newTodo);
    },
  },
});

const selectors = {
  selectAll: (state) => state.tasks.allTasks,
  selectById: (state, id) => state.tasks.allTasks.find((task) => task.uid === id),
};

export const tasksSlice = {
  ...slice,
  selectors,
};
