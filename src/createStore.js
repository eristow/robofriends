import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { searchRobots, requestRobots } from './reducers';

export default function configureStore() {
  const isDev = process.env.NODE_ENV !== 'development';

  const rootReducer = combineReducers({ searchRobots, requestRobots });

  let composeEnhancers = compose;

  if (isDev && typeof window === 'object') {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  }

  const middlewares = [thunkMiddleware];

  if (isDev) {
    const logger = createLogger();
    middlewares.push(logger);
  }

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    rootReducer,
    compose(composeEnhancers(...enhancers))
  );

  return store;
}
