import { Button } from '@mui/material';
import { Divider } from '../../components/divider/divider';
import { CreateTodoListItem } from '../task-details/todo-list/create-todo-list-item/create-todo-list-item';
import { TodoList } from '../task-details/todo-list/todo-list';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasksSlice } from '../../store';
import { useNavigate } from 'react-router-dom';
import genUid from 'light-uid';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    CreateTaskForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(1),
      padding: theme.spacing(2.5),
      flex: 1,
    },
    CreateTaskFormAvatar: {
      borderRadius: '50%',
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
    CreateTaskFormInfo: {
      display: 'flex',
      gap: theme.spacing(1),
      flexDirection: 'column',
    },
    CreateTaskFormTitle: {
      border: 'none',
      outline: 'none',
      backgroundColor: 'transparent',
      fontSize: theme.spacing(2.5),
      fontWeight: 'bold',
      fontStyle: 'italic',
      color: theme.palette.text.primary,

      '&::placeholder': {
        color: theme.palette.text.primary,
      },
    },
    CreateTaskFormDescription: {
      border: 'none',
      outline: 'none',
      backgroundColor: 'transparent',
      color: 'grey',
      fontStyle: 'italic',
    },
    AvatarWithInfo: {
      display: 'flex',
      gap: theme.spacing(2),
    },
    CreateTaskFormSaveOrCancel: {
      gap: theme.spacing(2.5),
      display: 'flex',
      justifyContent: 'flex-end',
    },
    CreateTaskFormAddTodo: {
      padding: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2),
    },
  }
));

const gentlemanAvatar = 'https://s3-alpha-sig.figma.com/img/4a28/0872/9dc399cae1699b498c1bfaf3748d9f5c?Expires=1642377600&Signature=YQVzYTDeQ-P8cJZU2-VISVEeclddw1U9CjeGOiSEYfwaZGZTW-EFmso2V5WAFyYWkYdwl194Ig1tPQTkWeZbSmDv1tkuvNJwbZFN-8Qu2hRWklrudqDk1HfaHQRxZL71QzA1bJPVuCtmVKJLGzRFa15ETKdJhRWNEH9VYkjgR0rlPEalLXDuyiiQEewCSEn49x1LJ9o9HM8sMnsKJDDEZJBAOhqghHvKgWijUxecqfT~8TzVCI4ZBzPc4SyvO1tiV3cI96hBNFjpZJKT5UwvL~7c72W~5nUwuykHNtQ6e9Tu8r5ULgr0StBubu6nF7t4Vvzinb48iGvSuqRTFQLeTw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
const ladyAvatar = 'https://s3-alpha-sig.figma.com/img/a8c0/5215/4653505e54bbb7287054963506684370?Expires=1642377600&Signature=GxcTT0B6B4llOgKIiKX2K3kkDrVebCe6aQds3q17nlp1QXjVVAP~qXBIy1Lhp-6JNAWx0TJqAdcSqH4DJmiWL-uYoJ-AQVXUulGOBNFEISqYC7F9q7B-B7P1NYAkiRKuok7snG3RnhBxTi56LP26Qi-tUy9yHAHb1RjxJFLO4~NXBLrGI5Jxi-HijtfANLIwX1tLHjjIqwiZ~NyX3U50cltYgm8sOqQrGKH37mSiJS1TDBFO7psV~xlCoq7OEpeyvLilcj3~1X~Un0m~bKSspcKjFwrvUxbXOKFfmr5kUhucZXkAinDqhMLIodU~o~D0fus6H7kwU171FfVWdjepPQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';

const DRAFT_TASK_VALUE = {
  title: '',
  description: '',
  avatar: '',
  todos: [],
};

export const CreateTaskForm = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [draftTask, setDraftTask] = useState({
    ...DRAFT_TASK_VALUE,
    avatar: Math.random() > 0.5 ? gentlemanAvatar : ladyAvatar,
  });

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setDraftTask({ ...draftTask, [name]: value });
  };

  const handleClose = () => {
    navigate('/');
  };

  const handleSaveNewTask = () => {
    dispatch(tasksSlice.actions.createTAsk(draftTask));
    handleClose();
  };

  const handleAddTodo = (newTodoName) => {
    const newTodo = { uid: genUid(), name: newTodoName, isDone: false };
    const newTodos = [...draftTask.todos, newTodo];

    setDraftTask({ ...draftTask, todos: newTodos });
  };

  const handleDeleteTodo = (todoUid) => {
    const todos = draftTask.todos.filter((todo) => todo.uid !== todoUid);
    setDraftTask({ ...draftTask, todos });
  };

  return (
    <PatchStyles classNames={classes}>
      <div className="CreateTaskForm">
        <div className="AvatarWithInfo">
          <img
            className="CreateTaskFormAvatar"
            alt="avatar"
            name="avatar"
            src={draftTask.avatar}
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
          <TodoList task={draftTask} onDeleteTodo={handleDeleteTodo} />
          <CreateTodoListItem onNewTodo={handleAddTodo} />
        </div>

        <div className="CreateTaskFormSaveOrCancel">
          <Button
            variant="text"
            size="medium"
            color="success"
            onClick={handleClose}
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
    </PatchStyles>
  );
};
