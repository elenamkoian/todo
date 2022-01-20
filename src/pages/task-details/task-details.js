import { TaskInfo } from '../../components/task-info/task-info';
import * as classes from './task-details.module.scss';
import { TodoList } from './todo-list/todo-list';
import { CreateTodoListItem } from './todo-list/create-todo-list-item/create-todo-list-item';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSlice } from '../../store';
import { useParams } from 'react-router-dom';
import PatchStyles from 'patch-styles';

export const TaskDetails = () => {
  const dispatch = useDispatch();
  const { taskUid } = useParams();
  const task = useSelector((state) => tasksSlice.selectors.selectById(state, taskUid));

  const handleDeleteTodo = (todoUid) => {
    dispatch(tasksSlice.actions.deleteTodo({
      taskUid,
      todoUid,
    }));
  };

  const handleNewTodo = (newTodoName) => {
    dispatch(tasksSlice.actions.createTodo({
      taskUid,
      newTodoName,
    }));
  };

  if (!task) {
    return null;
  }

  return (
    <PatchStyles classNames={classes}>
      <div className="TaskDetails">
        <TaskInfo task={task} />
        <TodoList task={task} onDeleteTodo={handleDeleteTodo} />
        <CreateTodoListItem onNewTodo={handleNewTodo} />
      </div>
    </PatchStyles>
  );
};
