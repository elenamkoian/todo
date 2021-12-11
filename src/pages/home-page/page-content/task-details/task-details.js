import { TaskInfo } from '../../../../components/task-info/task-info';
import './task-details.scss';
import { TodoList } from './todo-list/todo-list';
import { CreateTodoListItem } from './todo-list/create-todo-list-item/create-todo-list-item';

export const TaskDetails = ({ taskList, selectedTask }) => {
  return (
    <div className="TaskDetails">
      <TaskInfo task={taskList[selectedTask]} />
      <TodoList task={taskList[selectedTask]} />
      <CreateTodoListItem />
    </div>
  );
};
