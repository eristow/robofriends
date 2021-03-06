import './wdyr';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'tachyons';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './containers/App';
import configureStore from './createStore';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
