import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const defaultState = {
  value: 0,
};

const reducer = (
  state = defaultState,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, value: state.value + action.payload };

    case 'DECREMENT':
      return { ...state, value: state.value - action.payload };

    default:
      return state;
  }
};

const store = createStore(reducer);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
