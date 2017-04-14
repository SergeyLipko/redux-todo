import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import App from './components/App';
import { loadState, saveState  } from './localStorage';

const persistedState = loadState();
const store = createStore(
  reducer,
  // persistedState
);

// store.subscribe(() => {
//   saveState(store.getState());
// });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
