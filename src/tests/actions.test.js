import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from '../constants';
import * as actions from '../actions';

describe('setSearchField action', () => {
  it('should create an action to search robots', () => {
    const text = 'testText';
    const expectedAction = {
      type: CHANGE_SEARCH_FIELD,
      payload: text,
    };

    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });
});

describe('requestRobots action', () => {
  const mockStore = configureMockStore([thunkMiddleware]);
  const mockData = {
    robots: [
      {
        id: '123',
        name: 'Smith',
        email: 'smith@email.com',
      },
    ],
  };
  const mockError = 'anErrorHere';

  const expectedActionPending = {
    type: REQUEST_ROBOTS_PENDING,
  };
  const expectedActionSuccess = {
    type: REQUEST_ROBOTS_SUCCESS,
    payload: mockData,
  };
  const expectedActionFailed = {
    type: REQUEST_ROBOTS_FAILED,
    payload: new Error(mockError),
  };

  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should dispatch PENDING when requesting robots API', () => {
    fetch.mockResponseOnce(JSON.stringify(mockData));
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();

    expect(action[0]).toEqual(expectedActionPending);
  });

  it('should dispatch SUCCESS on successful robots API request', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockData));
    const store = mockStore();

    return store.dispatch(actions.requestRobots()).then(() => {
      const action = store.getActions();
      expect(action[0]).toEqual(expectedActionPending);
      expect(action[1]).toEqual(expectedActionSuccess);
      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch.mock.calls[0][0]).toEqual('https://jsonplaceholder.typicode.com/users');
    });
  });

  it('should dispatch FAILURE on failed robots API request', () => {
    fetch.mockReject(new Error(mockError));
    const store = mockStore();

    return store.dispatch(actions.requestRobots()).then(() => {
      const action = store.getActions();
      expect(action[0]).toEqual(expectedActionPending);
      expect(action[1]).toEqual(expectedActionFailed);
      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch.mock.calls[0][0]).toEqual('https://jsonplaceholder.typicode.com/users');
    });
  });
});
