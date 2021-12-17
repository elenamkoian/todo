import { TaskInfo } from '../../../../components/task-info/task-info';
import './task-details.scss';
import { TodoList } from './todo-list/todo-list';
import { CreateTodoListItem } from './todo-list/create-todo-list-item/create-todo-list-item';

export const TaskDetails = ({ task, onNewTodo }) => {
  return (
    <div className="TaskDetails">
      <TaskInfo task={task} />
      <TodoList task={task} />
      <CreateTodoListItem onNewTodo={onNewTodo}/>
    </div>
  );
};
