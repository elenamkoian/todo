import { Checkbox } from '../../../../components/checkbox';
import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    TodoListItem: {
      color: theme.palette.text.primary,
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(1),
    },
    RemoveIcon: {
      color: theme.palette.text.primary,
      fontSize: theme.spacing(1.25),
      cursor: 'pointer',
    },
  }
));

export const TodoListItem = ({ name, onDeleteTodo }) => {
  const classes = useStyles();
  return (
    <PatchStyles classNames={classes}>
      <div className="TodoListItem">
        <Checkbox label={name} />

        <IconButton className="RemoveIcon" size="small" onClick={() => onDeleteTodo()}>
          <Close />
        </IconButton>
      </div>
    </PatchStyles>
  );
};
