import { TaskInfo } from '../../../../components/task-info/task-info';
import './task-details.scss';
import { TodoList } from './todo-list/todo-list';

export const TaskDetails = ({ taskList, selectedTask }) => {
  return (
    <div className="TaskDetails">
      <TaskInfo task={taskList[selectedTask]} />
      <TodoList task={taskList[selectedTask]} />
    </div>
  );
};
