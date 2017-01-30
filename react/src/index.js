import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
// import store from './stores/index';
import {Provider} from 'react-redux';
import todos from './reducer/reducer.js';
import {createStore} from 'redux';

//default data
var _state = [
  {
    text: 'todo example 1',
    completed: false,
    isArchived: false
  }, {
    text: 'todo example 2',
    completed: false,
    isArchived: false
  }
];

var store = createStore(todos, _state);

// Render the main component into the dom
ReactDOM.render(
  <Provider store = {store}>
    <App/>
  </Provider >, document.getElementById('app'));

// 其实，这个框架是个定势：Provider provide a store which created by redux with reducers. The root component wraped with connect component that is necessary when using redux.
