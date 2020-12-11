import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import './index.css';
import App from './components/App';
import movies from './reducers.js';


 const store = createStore(movies);
 console.log(' yes store', store);
// console.log(' BEFORE STATE', store.getState());

// store.dispatch({
// type:'ADD_MOVIES',
// movies:[{name:'superman'}]
// });

// console.log('A STATE',store.getState());

ReactDOM.render(<App store={store}/>, document.getElementById('root'));

