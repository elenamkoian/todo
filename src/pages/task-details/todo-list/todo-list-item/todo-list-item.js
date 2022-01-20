import * as classes from  './todo-list-item.module.scss';
import { Checkbox } from '../../../../components/checkbox';
import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import PatchStyles from 'patch-styles';

export const TodoListItem = ({ name, onDeleteTodo }) => {
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
