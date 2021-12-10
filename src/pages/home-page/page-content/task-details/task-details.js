import { TaskInfo } from '../../../../components/task-info/task-info';
import './task-details.scss';
import { TodoList } from './todo-list/todo-list';

export const TaskDetails = ({ taskList }) => {
  return (
    <div className="TaskDetails">
      <TaskInfo task={taskList[0]} />
      <TodoList taskList={taskList} />
    </div>
  );
};
