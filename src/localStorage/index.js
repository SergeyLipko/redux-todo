export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedStore = JSON.stringify(state);
    localStorage.setItem('state', serializedStore);
  } catch (e) {
    throw new Error(e);
  }
};