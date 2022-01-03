import './create-task-list-item.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const CreateTaskListItem = () => {
  return (
    <Link
      to="/create"
      className="CreateTaskListItem"
    >
      <span className="CreateTaskListItemAvatar"><FontAwesomeIcon icon={faPlus} /></span>
      <div className="AddInfoDiv">
        <p className="CreateTaskListItemTitle">Add a task</p>
      </div>
    </Link>
  );
};
