import { createStore } from 'redux';

function reducer(state, action) {
  switch(action.type) {
    case 'ADD_TODO' : {
      return applyAddTodo(state, action);
    }
    case 'TOGGLE_TODO' : {
      return applyToggleTodo(state, action);
    }
    default : return state;
  }
}

function applyAddTodo(state, action) {
  return state.concat(action.todo);
}

function applyToggleTodo(state, action) {
  return state.map(todo =>
    todo.id === action.todo.id
      ? Object.assign({}, todo, { completed: !todo.completed })
      : todo
  );
}

const store = createStore(reducer, []);

console.log('initial state:');
console.log(store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('store update, current state:');
  console.log(store.getState());
});

store.dispatch({
  type: 'ADD_TODO',
  todo: { id: '0', name: 'learn redux', completed: false },
});

store.dispatch({
  type: 'ADD_TODO',
  todo: { id: '1', name: 'learn mobx', completed: false },
});

store.dispatch({
  type: 'TOGGLE_TODO',
  todo: { id: '0' },
});

unsubscribe();