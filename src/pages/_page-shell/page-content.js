import * as classes from './page-content.module.scss';
import { TaskList } from './task-list/task-list';
import PatchStyles from 'patch-styles';

export const PageContent = ({ children }) => {
  return (
    <PatchStyles classNames={classes}>
      <div className="PageContent">
        <TaskList />

        {children}
      </div>
    </PatchStyles>
  );
};
