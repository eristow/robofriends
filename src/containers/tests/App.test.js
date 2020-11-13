import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import App from '../App';
import configureStore from '../../createStore';

describe('App', () => {
  let store;
  beforeEach(() => {
    store = configureStore();
  });

  it('should render the App component', () => {
    expect(
      shallow(
        <Provider store={store}>
          <App />
        </Provider>
      )
    ).toMatchSnapshot();
  });
});
