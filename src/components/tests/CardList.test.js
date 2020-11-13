import React from 'react';
import { shallow } from 'enzyme';
import CardList from '../CardList';

describe('CardList', () => {
  it('should render CardList component', () => {
    const mockData = [
      {
        id: 1,
        name: 'John Smith',
        username: 'JohnJohn',
        email: 'john@gmail.com',
      },
    ];

    expect(shallow(<CardList data={mockData} />)).toMatchSnapshot();
  });
});
