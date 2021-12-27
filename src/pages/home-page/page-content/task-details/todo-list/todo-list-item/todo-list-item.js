import './todo-list-item.scss';
import { Checkbox } from '../../../../../../components/checkbox';
import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const TodoListItem = ({ name, isDone, onDeleteTodo }) => {
  return (
    <div className="TodoListItem">
      <Checkbox label={name} />

      <IconButton className="RemoveIcon" size="small" onClick={() => onDeleteTodo()}>
        <Close />
      </IconButton>
    </div>
  );
};
