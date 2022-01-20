import * as classes from './task-info.module.scss';
import PatchStyles from 'patch-styles';

export const TaskInfo = ({ task }) => {
  return (
    <PatchStyles classNames={classes}>
      <div className="TaskInfo">
        <img className="Avatar" alt="avatar" src={task.avatar} />
        <div className="ItemInfoDiv">
          <p className="ItemTitle">{task.title}</p>
          <p className="ItemDescription">{task.description}</p>
        </div>
      </div>
    </PatchStyles>
  );
};
