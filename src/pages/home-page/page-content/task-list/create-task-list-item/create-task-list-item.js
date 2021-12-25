import './create-task-list-item.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const CreateTaskListItem = ({ onCreateTaskFormVisibilityChange }) => {
  return (
    <div className="CreateTaskListItem" onClick={onCreateTaskFormVisibilityChange}>
      <span className="CreateTaskListItemAvatar"><FontAwesomeIcon icon={faPlus} /></span>
      <div className="AddInfoDiv">
        <p className="CreateTaskListItemTitle">Add todo</p>
      </div>
    </div>
  );
};
