import React from 'react';
import ReactDom from 'react-dom';

import App from './containers/App';

const container = document.getElementById('app');
ReactDom.render(<App />, container); //render inicial
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    ReactDom.render(<App />, container);
  });
}
