const todo = (state = {}, action) => {
  switch (action.type) {

    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };

    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return ({
        ...state,
        completed: !state.completed
      });

    default:
      return state
  }
};

const todos = (state = [], action) => {
  switch (action.type) {

    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];

    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));

    case 'REMOVE_TODO':
      return state.filter(t => t.id !== action.id);

    case 'SAVE_UPDATED_TODO':
      return state.map(t => t.id === action.id ? { ...t, text: action.text } : t);

    default:
      return state
  }
};

export default todos;