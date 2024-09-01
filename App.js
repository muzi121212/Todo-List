import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import Navigation from './src/navigation';
import store from './src/store';
import { getData, storeData } from './src/utils/asyncStorageHelper';
import { addTodo } from './src/slices/todosSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadTodos = async () => {
      const todos = await getData('todos');
      if (todos) {
        todos.forEach(todo => dispatch(addTodo(todo)));
      }
    };

    loadTodos();
  }, [dispatch]);

  useEffect(() => {
    store.subscribe(() => {
      const state = store.getState();
      storeData('todos', state.todos);
    });
  }, []);

  return <Navigation />;
};

export default function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
