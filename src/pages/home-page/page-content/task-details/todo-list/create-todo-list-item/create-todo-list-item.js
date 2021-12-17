import './create-todo-list-item.scss';
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// import { TodoListItem } from '../todo-list-item/todo-list-item';

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
              onBlur={this.handleBlur}
              onKeyDown={this.handleKeyDown}
              autoFocus
            />
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

  handleBlur = (ev) => {
    this.setState({
      isEditMode: !this.state.isEditMode,
    });

    if(!ev.target.value) {
      return;
    }
    this.props.onNewTodo(ev.target.value);
  };

  handleKeyDown = (ev) => {
    if(ev.code === 'Enter') {
      this.handleBlur(ev);
    }
  }
}
