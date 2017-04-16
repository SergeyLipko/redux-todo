import React from 'react';
import { connect } from 'react-redux';
import { TextField, RaisedButton } from 'material-ui';
import classNames from 'classnames';

import { saveUpdatedTodo, hideEditTodoBar } from '../../actions';
import './style.sass';

class EditTodo extends React.Component {
  state = {
    newTodoValue: ''
  };
  
  render() {
    let { currentTodoId, isEditTodoBarOpen, appTodos } = this.props;
    let { newTodoValue } = this.state;
    
    console.log(appTodos.filter(t => t.id === currentTodoId)[0]);

    return (
      <div className={classNames(
        'edit-todo-wrapper',
        {
          'edit-isShown': isEditTodoBarOpen,
          'edit-isHide': !isEditTodoBarOpen
        }
      )}>
        <TextField
          multiLine={true}
          rowsMax={4}
          underlineFocusStyle={{color: '#00bcd4'}}
          onChange={this.handleChangeValue()}
          value={newTodoValue}
          hintText='Update todo'/>
        <RaisedButton
          className="edit-confirm-button"
          primary={true}
          onClick={() => this.handleTodoUpdating(currentTodoId, newTodoValue)}
          label='Update todo'/>
      </div>
    )
  }

  handleTodoUpdating = (id, value) => {
    if (value.length !== 0) {
      this.props.updateTodo(id, value);
      this.props.hideEditBar();

      this.setState ({
        newTodoValue: ''
      })
    }
  };

  handleChangeValue = () => e => {
    this.setState ({
      newTodoValue: e.target.value
    })
  }
}

const mapStateToProps = state => ({
  isEditTodoBarOpen: state.editTodoBar.isShown,
  currentTodoId: state.editTodoBar.currentTodoId,
  appTodos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  hideEditBar: () => dispatch(hideEditTodoBar()),
  updateTodo: (id, value) => dispatch(saveUpdatedTodo(id, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTodo);