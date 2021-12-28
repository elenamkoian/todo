import './create-todo-list-item.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const CreateTodoListItem = ({ onNewTodo }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const toggle = () => setIsEditMode(!isEditMode);

  const save = (value) => {
    onNewTodo(value);
    toggle();
  };

  const cancel = () => toggle();

  const handleEditModeChange = () => toggle();

  const handleBlur = (ev) => {
    ev.target.value ? save(ev.target.value) : cancel();
  };

  const handleKeyDown = (ev) => {
    if (ev.code === 'Enter') {
      handleBlur(ev);
    }
    if (ev.code === 'Escape') {
      cancel();
    }
  };

  return (
    <div>
      {
        !isEditMode ? (
          <label className="CreateTodoListItem" onClick={handleEditModeChange}>
            <div className="AddIcon">
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <span>add Todo</span>
          </label>
        ) : (
          <input
            type="text"
            className="AddTodoInput"
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        )
      }
    </div>
  );
};
