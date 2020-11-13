import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from '../CounterButton';

describe('CounterButton', () => {
  const mockColor = 'blue';

  it('should render the CounterButton component', () => {
    expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
  });

  it('should increment count when clicked', () => {
    const button = shallow(<CounterButton color={mockColor} />);
    button.find('[id="counter"]').simulate('click');
    expect(button.text()).toEqual('Count: 1');
    expect(button.props().color).toEqual('blue');
  });
});
