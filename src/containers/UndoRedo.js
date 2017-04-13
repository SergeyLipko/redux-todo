import React from 'react';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <p>
    <button onClick={onUndo} disabled={!canUndo}>
      Undo
    </button>
    <button onClick={onRedo} disabled={!canRedo}>
      Redo
    </button>
  </p>
);

export default connect(
  state => ({
    canUndo: state.todos.past.length > 0,
    canRedo: state.todos.future.length > 0
  }),
  ({
    onUndo: UndoActionCreators.undo,
    onRedo: UndoActionCreators.redo
  })
)(UndoRedo);
