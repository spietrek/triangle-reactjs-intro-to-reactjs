import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root');

const render = () => {
  ReactDOM.render(<App />, rootEl);
};

render();

if (module.hot) {
  module.hot.accept('./App', () => {
    render();
  });
}

registerServiceWorker();
