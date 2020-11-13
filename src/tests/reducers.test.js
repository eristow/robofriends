import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from '../constants';

import * as actions from '../actions';

import * as reducers from '../reducers';

describe('searchRobots reducer', () => {
  const initialStateSearch = {
    searchField: '',
  };

  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch);
  });

  it('should handle CHANGE_SEARCHFIELD', () => {
    expect(
      reducers.searchRobots(initialStateSearch, actions.setSearchField('abc'))
    ).toEqual({ searchField: 'abc' });
  });
});

describe('requestRobots reducer', () => {
  const initialStateRobots = {
    isPending: false,
    robots: [],
    error: '',
  };

  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it('should handle REQUEST_ROBOTS_PENDING action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({ ...initialStateRobots, isPending: true });
  });

  it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
    const dummyRobot = {
      id: '123',
      name: 'John',
      email: 'John@email.com',
    };

    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [dummyRobot],
      })
    ).toEqual({ ...initialStateRobots, robots: [dummyRobot] });
  });

  it('should handle REQUEST_ROBOTS_FAILED action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: { message: 'errorHere' },
      })
    ).toEqual({ ...initialStateRobots, error: 'errorHere' });
  });
});
