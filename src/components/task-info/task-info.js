import './task-info.scss';

export const TaskInfo = ({ task }) => {
  return (
    <div className="TaskInfo">
      <img className="Avatar" alt="avatar" src={task.avatar} />
      <div className="ItemInfoDiv">
        <p className="ItemTitle">{task.title}</p>
        <p className="ItemDescription">{task.description}</p>
      </div>
    </div>
  );
};
