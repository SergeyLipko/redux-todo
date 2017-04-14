import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import editTodo from './editTodo';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  editTodo
});

export default todoApp