import './page-content.scss';
import { TaskList } from './task-list/task-list';

export const PageContent = ({ children }) => {
  return (
    <div className="PageContent">
      <TaskList />

      {children}
    </div>
  );
};
