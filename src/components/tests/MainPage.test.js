import React from 'react';
import { shallow, render, mount } from 'enzyme';
import MainPage from '../MainPage';

describe('MainPage', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 3,
          name: 'John Joans',
          email: 'joans@gmail.com',
        },
        {
          id: 4,
          name: 'Sarah Joans',
          email: 'sarah@gmail.com',
        },
      ],
      searchField: '',
      isPending: false,
    };
    wrapper = shallow(<MainPage {...mockProps} />);
  });

  it('should render the MainPage component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render loading message when isPending is false', () => {
    mockProps = { ...mockProps, isPending: true };
    wrapper = shallow(<MainPage {...mockProps} />);
    expect(wrapper.text()).toEqual('Loading');
  });

  it('should render error message when error is present', () => {
    const errorMessage = 'an error occurred';
    mockProps = { ...mockProps, error: errorMessage };
    wrapper = shallow(<MainPage {...mockProps} />);
    expect(wrapper.text()).toEqual(`Error: ${errorMessage}`);
  });

  it('should filter robots correctly when a robot exists', () => {
    mockProps = {
      ...mockProps,
      searchField: 'john',
    };
    wrapper = mount(<MainPage {...mockProps} />);
    expect(wrapper.find('#cardList').children().length).toBe(1);
  });

  it('should render no robots when filter returns nothing', () => {
    mockProps = {
      ...mockProps,
      searchField: 'x',
    };
    wrapper = mount(<MainPage {...mockProps} />);
    expect(wrapper.find('#cardList').children().length).toBe(0);
  });
});
