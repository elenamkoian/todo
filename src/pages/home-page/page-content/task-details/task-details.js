import { TaskInfo } from '../../../../components/task-info/task-info';
import './task-details.scss';
import { TodoList } from './todo-list/todo-list';
import { CreateTodoListItem } from './todo-list/create-todo-list-item/create-todo-list-item';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../../store';
import { selectTaskByIndex } from '../../../../store/selectors';

export const TaskDetails = ({ selectedTaskIndex }) => {
  const dispatch = useDispatch();
  const task = useSelector((state) => selectTaskByIndex(state, selectedTaskIndex));

  const handleDeleteTodo = (todoIndex) => {
    dispatch({
      type: actions.deleteTodo,
      payload: {
        taskIndex: selectedTaskIndex,
        todoIndex: todoIndex,
      },
    });
  };

  const handleNewTodo = (newTodoName) => {
    dispatch({
      type: actions.createTodo,
      payload: {
        taskIndex: selectedTaskIndex,
        newTodoName: newTodoName,
      },
    });
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
