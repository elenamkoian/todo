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
              onBlur={this.handleBlur}
              onKeyDown={this.handleKeyDown}
              autoFocus
            />
          )
        }
      </div>
    );
  }

  toggle = () => {
    this.setState({
      isEditMode: !this.state.isEditMode,
    });
  };

  save = (value) => {
    this.props.onNewTodo(value);
    this.toggle();
  };

  cancel = () => {
    this.toggle();
  }

  handleEditModeChange = () => {
    this.toggle();
  };

  handleBlur = (ev) => {
    ev.target.value ? this.save(ev.target.value) : this.cancel();
  };

  handleKeyDown = (ev) => {
    if (ev.code === 'Enter') {
      this.handleBlur(ev);
    }
    if (ev.code === 'Escape' ) {
      this.cancel();
    }
  };

}
