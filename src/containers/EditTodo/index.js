import React from 'react';
import { connect } from 'react-redux';
import { TextField, RaisedButton } from 'material-ui';
import Clear from 'material-ui/svg-icons/content/clear';
import classNames from 'classnames';

import { saveUpdatedTodo, hideEditTodoBar } from '../../actions';
import './style.sass';

class EditTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodoValue: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    let { currentTodoId } = nextProps;

    this.setState((state, props) => ({
      newTodoValue: props.appTodos && currentTodoId && props.appTodos
        .filter(t => t.id === currentTodoId)[0].text
    }));
  }
  
  render() {
    let { currentTodoId, isEditTodoBarOpen } = this.props;
    let { newTodoValue } = this.state;
    
    return (
      <div className={classNames(
        'edit-todo-wrapper',
        {
          'edit-isShown': isEditTodoBarOpen,
          'edit-isHide': !isEditTodoBarOpen
        }
      )}>
        <TextField
          className="edit-todo-field"
          multiLine={true}
          rowsMax={10}
          underlineFocusStyle={{color: '#00bcd4'}}
          onChange={this.handleChangeValue()}
          value={newTodoValue}
          hintText='Update todo'/>
        <RaisedButton
          className="edit-confirm-button"
          secondary={true}
          onClick={() => this.handleTodoUpdating(currentTodoId, newTodoValue)}
          label='Update todo'/>

        <button
          onClick={() => this.props.hideEditBar()}
          type="button"
          className="close-button"
        >
          <Clear className="close-button-icon"/>
        </button>
      </div>
    )
  }

  handleTodoUpdating(id, value) {
    if (value.length !== 0) {
      this.props.updateTodo(id, value);
      this.props.hideEditBar();

      this.setState ({
        newTodoValue: ''
      });
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