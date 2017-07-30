import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

const logger = createLogger();

function reducer(state, action) {
  switch(action.type) {
    case 'TODO_ADD' : {
      return applyAddTodo(state, action);
    }
    case 'TODO_TOGGLE' : {
      return applyToggleTodo(state, action);
    }
    default : return state;
  }
}

function applyAddTodo(state, action) {
  const todo = { ...action.todo, completed: false };
  return [ ...state, todo ];
}

function applyToggleTodo(state, action) {
  return state.map(todo =>
  todo.id === action.todo.id
    ? { ...todo, completed: !todo.completed }
    : todo
  );
}

const store = createStore(
  reducer,
  [],
  applyMiddleware(logger)
);

store.dispatch({
  type: 'TODO_ADD',
  todo: { id: '0', name: 'learn redux', completed: false },
});

store.dispatch({
  type: 'TODO_ADD',
  todo: { id: '1', name: 'learn mobx', completed: false },
});

store.dispatch({
  type: 'TODO_TOGGLE',
  todo: { id: '0' },
});
