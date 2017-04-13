import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './style.sass';

const Todo = ({ onClick, deleteTodoItem, completed, text }) => (
  <li className="todo-wrapper">
    <div onClick={onClick}>
      <p
        className={classNames(
          'todo-body',
          { 'completed': completed }
        )}
      >
        {text}
      </p>
    </div>
    <button onClick={deleteTodoItem}>
      delete
    </button>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  deleteTodoItem: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
