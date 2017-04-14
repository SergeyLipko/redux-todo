const INITIAL_STATE = {
  isShown: false,
  currentTodoId: '',
};

const editTodo = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case 'EDIT_TODO':
      return {
        ...state,
        currentTodoId: action.id,
        isShown: true,
      };

    case 'UPDATE_TODO':
      return {
        ...state,
        isShown: false
      };

    default:
      return state
  }
};

export default editTodo;