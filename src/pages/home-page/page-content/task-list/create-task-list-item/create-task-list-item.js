import './create-task-list-item.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Component } from 'react';

export class CreateTaskListItem extends Component {
  state = {
    title: 'Add a doit',
    description: 'Add description',
  }

  render() {
    return (
      <div className="CreateTaskListItem">
        <span className="CreateTaskListItemAvatar"><FontAwesomeIcon icon={faPlus} /></span>
        <div className="AddInfoDiv">
          <input className="CreateTaskListItemTitle" name="title" value={this.state.title} onChange={this.handleInputChange} />
          <input className="CreateTaskListItemDescription" name="description" value={this.state.description} onChange={this.handleInputChange} />
        </div>
      </div>
    );
  }

  handleInputChange = (ev) => {
   const name = ev.target.name;
   const value = ev.target.value;
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  }
}
