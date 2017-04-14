import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './style.sass';

const Todo = ({ onClick, onRemove, onEdit, completed, text }) => (
  <li className="todo-wrapper">
    <div onClick={onClick}>
      <p className={classNames(
          'todo-body',
          { 'completed': completed }
        )}>
        { text }
      </p>
    </div>
    <button onClick={onRemove}>delete</button>
    <button onClick={onEdit}>edit</button>

  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
