import { Button } from '@mui/material';
import './create-task-form.scss';
import { Component } from 'react';
import { Divider } from '../../../../components/divider/divider';
import { CreateTodoListItem } from '../task-details/todo-list/create-todo-list-item/create-todo-list-item';

export class CreateTaskForm extends Component {
  state = {
    title: '',
    description: '',
    avatar: '',
    todos: [],
  }

  render() {
    return (
      <div className="CreateTaskForm">
        <div className="AvatarWithInfo">
          <img className="CreateTaskFormAvatar" alt="avatar" name="avatar"
               src="https://s3-alpha-sig.figma.com/img/4a28/0872/9dc399cae1699b498c1bfaf3748d9f5c?Expires=1641168000&Signature=Rrzywy1DEucxrF9KXmrgRCRc3w77BDRy8PsM3UjtNlfbj8C18ZM2um~v8DLONluiboCETamN3jn1Yka0RqoIMftMFBfCQTXDeCE6RDzxxGOAXzcUkO20qX99y98aqRWK8h6Bt5Nv-oeaZgznfIxl~Tigex5uWV93l3uulMNzB7GLUepTY91hsEHlYt7VZZqM6JNwTBMyHGo18UoYlfdj-RIxuZLf0amzzsAdT44olXald7NSX1flkBk3GvRFg2~f6IxTwl45k8hwPR15fcBrqOuTjTv42Sr1AEYF1zfs0dAs4H95OFCVmSC0lAI-D7WKXrH0QO8gL68aokhCp8HmFw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
          <div className="CreateTaskFormInfo">
            <input className="CreateTaskFormTitle" name="title" placeholder="give a name to your doit" onChange={this.handleInputChange} />
            <input className="CreateTaskFormDescription" name="description" placeholder="tell a bit about your doit" autoComplete="off" onChange={this.handleInputChange} />
          </div>
        </div>
        <Divider />

        <div className="CreateTaskFormAddTodo">
          <CreateTodoListItem onNewTodo={this.handleNewTaskAddTodo}/>
        </div>

        <div className="CreateTaskFormSaveOrCancel">
          <Button variant="text" size="medium" color="success">CANCEL</Button>
          <Button variant="outlined" size="large" color="success" onClick={this.handleNewTaskSave}>Save</Button>
        </div>
      </div>
    );
  }

  handleInputChange = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;
    this.setState({
      [name]: value,
    })
  }

  handleNewTaskSave = () => {
    this.props.onNewTaskSave(this.state);
  }

  handleNewTaskAddTodo = (newTodoName) => {
    const newTodo = { name: newTodoName, isDone: false };
    const todos = [...this.state.todos, newTodo]

    this.setState({ todos }) // add localStorage part
  }

}


