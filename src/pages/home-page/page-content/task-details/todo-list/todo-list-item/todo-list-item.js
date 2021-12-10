import './todo-list-item.scss';
import { Checkbox } from '../../../../../../components/checkbox';

export const TodoListItem = ({ name, isDone }) => {
  return (
    <div className="TodoListItem">
      {/*<input type="checkbox" checked={!!isDone} />*/}
      {/*<label>{name}</label>*/}
      <Checkbox label={name} />
    </div>
  );
};
