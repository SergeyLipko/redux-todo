import React, { PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import classNames from 'classnames';
import './style.sass';

const Todo = ({ onClick, onRemove, onEdit, completed, text }) => (
  <li className="todo-wrapper">
    <div className="todo-left-side">
      <div className="check-box-wrapper">
        <Checkbox checked={completed} onCheck={onClick} />
      </div>

      <div className="text-wrapper">
        <p className={classNames({'text-completed': completed})}>
          { text }
        </p>
      </div>
    </div>

    <div className="todo-menu">
      <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
      >
        <MenuItem
          onTouchTap={onEdit}
          primaryText="Edit"
        />
        <MenuItem
          onTouchTap={onRemove}
          primaryText="Remove"
        />

      </IconMenu>
    </div>
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
