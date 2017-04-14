import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { saveUpdatedTodo } from '../../actions';
import './style.sass';

class EditTodo extends React.Component {
  state = {
    newTodoValue: 'i am new todo'
  };
  
  render() {
    let { currentTodoId, isEditTodoBarOpen } = this.props;
    let { newTodoValue } = this.state;
    
    console.log(this.props.state);

    return (
      <div className={classNames(
        'edit-todo-wrapper',
        {
          'edit-isShown': isEditTodoBarOpen,
          'edit-isHide': !isEditTodoBarOpen
        }
      )}>
        edit todo
        <input
          onChange={e => this.handleChangeValue(e)}
          value={newTodoValue}
          type="text"
        />
        <button onClick={() => this.handleTodoUpdating(currentTodoId)(newTodoValue)}>
          super update todo!
        </button>
      </div>
    )
  }

  handleTodoUpdating = id => value => this.props.updateTodo(id, value);

  handleChangeValue = value => {
    
  }
}

const mapStateToProps = state => ({
  isEditTodoBarOpen: state.editTodo.isShown,
  currentTodoId: state.editTodo.currentTodoId,
  state
});

const mapDispatchToProps = dispatch => ({
  // confirmTodoUpdating: data => dispatch(updateTodo(data)),
  updateTodo: (id, value) => dispatch(saveUpdatedTodo(id, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTodo);