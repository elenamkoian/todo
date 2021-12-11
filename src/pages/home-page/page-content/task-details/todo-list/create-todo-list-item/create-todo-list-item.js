import './create-todo-list-item.scss';
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export class CreateTodoListItem extends Component {
  state = {
    isEditMode: false,
  };

  render() {
    const isEditMode = this.state.isEditMode;
    return (
      <div>
        {
          !isEditMode ? (
            <label className="CreateTodoListItem" onClick={this.handleEditModeChange}>
              <div className="AddIcon">
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <span>add Todo</span>
            </label>
          ) : (
            <input
              type="text"
              className="AddTodoInput"
              onBlur={this.handleSaveTodo}
              autoFocus />
          )
        }
      </div>
    );
  }

  handleEditModeChange = () => {
    this.setState({
      isEditMode: !this.state.isEditMode,
    });
  };

  handleSaveTodo = () => {
    this.setState({
      isEditMode: !this.state.isEditMode,
    });
  };
}
