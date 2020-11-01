import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { searchRobots, requestRobots } from './reducers';

const isDev = process.env.NODE_ENV === 'development';

const rootReducer = combineReducers({ searchRobots, requestRobots });

const logger = createLogger();

const store = createStore(
  rootReducer,
  compose(
    // applyMiddleware(thunkMiddleware, logger),
    applyMiddleware(thunkMiddleware)
    // isDev &&
    //   window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //   window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
