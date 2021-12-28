import { Button } from '@mui/material';
import './create-task-form.scss';
import { Divider } from '../../../../components/divider/divider';
import { CreateTodoListItem } from '../task-details/todo-list/create-todo-list-item/create-todo-list-item';
import { TodoList } from '../task-details/todo-list/todo-list';
import { useState } from 'react';

const DRAFT_TASK_VALUE = {
  title: '',
  description: '',
  avatar: '',
  todos: [],
};

export const CreateTaskForm = ({ onSaveNewTask, onCancelNewTask }) => {
  const [draftTask, setDraftTask] = useState(DRAFT_TASK_VALUE);

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;

    setDraftTask({ ...draftTask, [name]: value });
  };

  const handleSaveNewTask = () => onSaveNewTask(draftTask);

  const handleAddTodo = (newTodoName) => {
    const newTodo = { name: newTodoName, isDone: false };
    const newTodos = [...draftTask.todos, newTodo];

    setDraftTask({ ...draftTask, todos: newTodos });
  };

  const handleDeleteTodo = (index) => {
    const todos = draftTask.todos;
    todos.splice(index, 1);
    setDraftTask({ ...draftTask, todos });
  }

    return (
      <div className="CreateTaskForm">
        <div className="AvatarWithInfo">
          <img
            className="CreateTaskFormAvatar"
            alt="avatar"
            name="avatar"
            src="https://s3-alpha-sig.figma.com/img/4a28/0872/9dc399cae1699b498c1bfaf3748d9f5c?Expires=1641168000&Signature=Rrzywy1DEucxrF9KXmrgRCRc3w77BDRy8PsM3UjtNlfbj8C18ZM2um~v8DLONluiboCETamN3jn1Yka0RqoIMftMFBfCQTXDeCE6RDzxxGOAXzcUkO20qX99y98aqRWK8h6Bt5Nv-oeaZgznfIxl~Tigex5uWV93l3uulMNzB7GLUepTY91hsEHlYt7VZZqM6JNwTBMyHGo18UoYlfdj-RIxuZLf0amzzsAdT44olXald7NSX1flkBk3GvRFg2~f6IxTwl45k8hwPR15fcBrqOuTjTv42Sr1AEYF1zfs0dAs4H95OFCVmSC0lAI-D7WKXrH0QO8gL68aokhCp8HmFw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          />
          <div className="CreateTaskFormInfo">
            <input
              className="CreateTaskFormTitle"
              name="title"
              placeholder="give a name to your doit"
              maxLength={25}
              onChange={handleInputChange}
            />
            <input
              className="CreateTaskFormDescription"
              name="description"
              placeholder="tell a bit about your doit"
              autoComplete="off"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <Divider />

        <div className="CreateTaskFormAddTodo">
          <TodoList task={draftTask} onDeleteTodo={(index) => handleDeleteTodo(index)}/>
          <CreateTodoListItem onNewTodo={handleAddTodo} />
        </div>

        <div className="CreateTaskFormSaveOrCancel">
          <Button
            variant="text"
            size="medium"
            color="success"
            onClick={onCancelNewTask}
          >
            CANCEL
          </Button>

          <Button
            variant="outlined"
            size="large"
            color="success"
            onClick={handleSaveNewTask}
          >
            Save
          </Button>
        </div>
      </div>
    );
}
