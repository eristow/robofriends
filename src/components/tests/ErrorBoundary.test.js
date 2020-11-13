import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from '../ErrorBoundary';

describe('ErrorBoundary', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ErrorBoundary />);
  });

  it('should render ErrorBoundary component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render error message when hasError is true', () => {
    wrapper.setState({ hasError: true });
    expect(wrapper.text()).toEqual('Sorry, an error occurred.');
  });
});
