import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

describe('<Navigation />', () => {
  it('should render Navigation component', () => {
    const wrapper = shallow(
      <Navigation
        totalShoppingCart={20}
        onClickShoppingCart={jest.fn()}
        searchByName={jest.fn()}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
})


