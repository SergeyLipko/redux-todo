import React from 'react';
import Footer from '../Footer';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';

import '../../styles/reset/reset.css';
import './style.sass';

const App = () => (
  <div className="spa-wrapper">
    <div className="app-wrapper">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  </div>
);

export default App;
