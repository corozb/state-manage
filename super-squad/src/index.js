import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import {createStore} from 'redux';
import { addCharacterById } from './actions';
import rootReducer from './reducers'
import App from './App';
import './index.css'


const store = createStore(rootReducer);
store.subscribe(()=> console.log('store', store.getState()))
store.dispatch(addCharacterById(2))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

