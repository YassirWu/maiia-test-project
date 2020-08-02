import React from 'react';
import { shallow } from 'enzyme';
import Col from 'react-bootstrap/Col';

import ListProduct from './ListProduct';

describe('<ListProduct />', () => {
  it('should render ListProduct component', () => {
    const wrapper = shallow(
      <ListProduct>
        <p>first child</p>
        <p>second child</p>
        <p>third child</p>
      </ListProduct>
    );
    
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should renders three children inside Col bootstrap component', () => {
    const wrapper = shallow(
      <ListProduct>
        <p>first child</p>
        <p>second child</p>
        <p>third child</p>
      </ListProduct>
    );
    
    expect(wrapper.find(Col)).toHaveLength(3);
  });
})


