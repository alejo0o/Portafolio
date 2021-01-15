/* eslint-disable comma-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
//SSR
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import App from './containers/App';

const history = createBrowserHistory();

const container = document.getElementById('app');

//SSR
const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
renderMethod(
  <Router history={history}>
    <App />
  </Router>,
  container
);

//Desarrolloo
/*ReactDOM.render(<App />, container); //render inicial
if (module.hot) {
  module.hot.accept('./containers/App.js', () => {
    ReactDOM.render(<App />, container);
  });
}*/
