import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { throttle } from 'lodash';

import reducer from './reducers';
import App from './components/App';
import { loadState, saveState  } from './localStorage';

injectTapEventPlugin();
const persistedState = loadState();
const store = createStore(
  reducer,
  persistedState
);

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  });
}, 1000));

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
