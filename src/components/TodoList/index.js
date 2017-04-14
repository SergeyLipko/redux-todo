import React, { PropTypes } from 'react';
import Todo from '../Todo';

const TodoList = ({ todos, onTodoClick, onTodoRemove, onTodoEdit }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onRemove={() => onTodoRemove(todo.id)}
        onEdit={() => onTodoEdit(todo.id)}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onTodoRemove: PropTypes.func.isRequired,
  onTodoEdit: PropTypes.func.isRequired,
};

export default TodoList;