import { Close } from '@mui/icons-material';
import { FormControlLabel, IconButton, Checkbox } from '@mui/material';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    TodoListItem: {
      color: theme.palette.text.primary,
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(1),
    },
    DeleteTodoListItem: {
      color: theme.palette.text.primary,
      fontSize: theme.spacing(1.25),
      cursor: 'pointer',
    },
  }
));

export const TodoListItem = ({ todo, onDeleteTodo }) => {
  const classes = useStyles();
  return (
    <PatchStyles classNames={classes}>
      <div className="TodoListItem">

        <FormControlLabel
          control={(
            <Checkbox/>
          )}
          label={todo.name}
        />

        <IconButton className="DeleteTodoListItem" size="small" onClick={() => onDeleteTodo()}>
          <Close />
        </IconButton>

      </div>
    </PatchStyles>
  );
};
