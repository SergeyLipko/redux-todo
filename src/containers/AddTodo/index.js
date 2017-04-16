import React from 'react';
import { connect } from 'react-redux';
import { TextField, RaisedButton } from 'material-ui';

import { addTodo } from '../../actions';
import './style.sass';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoValue: ''
    }
  }

  render() {
    let { todoValue } = this.state;

    return (
      <div className="add-todo-wrapper">
        <TextField
          className="add-todo-field"
          multiLine={true}
          rowsMax={4}
          underlineFocusStyle={{color: '#00bcd4'}}
          onChange={this.handleChangeValue()}
          value={todoValue}
          hintText='New todo'/>

        <RaisedButton
          primary={true}
          onClick={() => this.handleAddingTodo(todoValue)}
          label='Add'/>
      </div>
    )
  }

  handleAddingTodo(todoValue) {
    this.props.addNewTodo(todoValue);

    this.setState({
      todoValue: ''
    })
  };

  handleChangeValue = () => e => {
    this.setState ({
      todoValue: e.target.value
    })
  }
}

const mapDispatchToProps = dispatch => ({
  addNewTodo: value => dispatch(addTodo(value))
});

export default connect(null, mapDispatchToProps)(AddTodo);