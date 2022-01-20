import * as classes from './create-task-list-item.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PatchStyles from 'patch-styles';

export const CreateTaskListItem = () => {
  return (
    <PatchStyles classNames={classes}>
      <Link
        to="/create"
        className="CreateTaskListItem"
      >
        <span className="CreateTaskListItemAvatar"><FontAwesomeIcon icon={faPlus} /></span>
        <div className="AddInfoDiv">
          <p className="CreateTaskListItemTitle">Add a task</p>
        </div>
      </Link>
    </PatchStyles>
  );
};
