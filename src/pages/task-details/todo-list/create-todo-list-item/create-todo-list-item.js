import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    CreateTodoListItem: {
      display: 'flex',
      gap: theme.spacing(1),
      color: theme.palette.text.primary,
      cursor: 'pointer',

      '& > span': {
        height: theme.spacing(2.5),
        fontSize: theme.spacing(2),
        color: theme.palette.text.primary,
        backgroundColor: 'transparent',
        border: theme.palette.text.primary,
        outline: 'none',
      },
    },
    AddIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    AddTodoInput: {
      color: theme.palette.text.primary,
      outline: 'none',
      padding: theme.spacing(0.7),
      fontSize: theme.spacing(2),
      border: '1px solid grey',
      borderRadius: theme.spacing(2),
      backgroundColor: 'transparent',
    },
  }
));

export const CreateTodoListItem = ({ onNewTodo }) => {
  const classes = useStyles();
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
    <PatchStyles classNames={classes}>
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
    </PatchStyles>
  );
};
