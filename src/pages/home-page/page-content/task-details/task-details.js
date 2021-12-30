import { TaskInfo } from '../../../../components/task-info/task-info';
import './task-details.scss';
import { TodoList } from './todo-list/todo-list';
import { CreateTodoListItem } from './todo-list/create-todo-list-item/create-todo-list-item';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSlice } from '../../../../store';

export const TaskDetails = ({ selectedTaskIndex }) => {
  const dispatch = useDispatch();
  const task = useSelector((state) => tasksSlice.selectors.selectByIndex(state, selectedTaskIndex));

  const handleDeleteTodo = (todoIndex) => {
    dispatch(tasksSlice.actions.deleteTodo({
        taskIndex: selectedTaskIndex,
        todoIndex: todoIndex,
    }));
  };

  const handleNewTodo = (newTodoName) => {
    dispatch(tasksSlice.actions.createTodo({
        taskIndex: selectedTaskIndex,
        newTodoName: newTodoName,
    }));
  };

  if (!task) {
    return null;
  }

  return (
    <div className="TaskDetails">
      <TaskInfo task={task} />
      <TodoList task={task} onDeleteTodo={(index) => handleDeleteTodo(index)} />
      <CreateTodoListItem onNewTodo={handleNewTodo} />
    </div>
  );
};
