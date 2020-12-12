import React from 'react';
import ReactDOM from 'react-dom';
import {createStore , applyMiddleware} from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers.js';


// function logger(obj,next,action)
// logger (obj)(next)(action)
const logger = function({ dispatch, getState }) {
  return function(next) {
    return function(action) {
      //  middlware  code
      console.log('ACTION_TYPE = ', action.type);
      next(action);
    };
  };
};



 const store = createStore(rootReducer , applyMiddleware(logger));
 console.log('store created', store);
// console.log(' BEFORE STATE', store.getState());

// store.dispatch({
// type:'ADD_MOVIES',
// movies:[{name:'superman'}]
// });

// console.log('AFTER STATE',store.getState());

ReactDOM.render(<App store={store}/>, document.getElementById('root'));

