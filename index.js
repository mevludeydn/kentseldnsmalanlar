import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('root');

const render = (Component) => {
  ReactDOM.createRoot(root).render(<Component />);
};

// İlk render
render(App);

// Hot module replacement (HMR) için gerekli kod
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}
