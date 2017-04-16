import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import editTodoBar from './editTodoBar';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  editTodoBar
});

export default todoApp