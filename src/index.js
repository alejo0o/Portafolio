import React from 'react';
import ReactDom from 'react-dom';

import App from './frontend/containers/App';

const container = document.getElementById('app');
ReactDom.render(<App />, container); //render inicial
if (module.hot) {
  module.hot.accept('./frontend/containers/App.js', () => {
    ReactDom.render(<App />, container);
  });
}
