const INITIAL_STATE = {
  isShown: false,
  currentTodoId: '',
};

const editTodoBar = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case 'SHOW_EDIT_TODO_BAR':
      return {
        ...state,
        currentTodoId: action.id,
        isShown: true,
      };

    case 'HIDE_EDIT_TODO_BAR':
      return {
        ...state,
        isShown: false
      };

    default:
      return state
  }
};

export default editTodoBar;