import React from 'react';
import { shallow } from 'enzyme';
import Col from 'react-bootstrap/Col';

import ListCard from './ListCard';

describe('<ListCard />', () => {
  it('should render ListCard component', () => {
    const wrapper = shallow(
      <ListCard>
        <p>first child</p>
        <p>second child</p>
        <p>third child</p>
      </ListCard>
    );
    
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should renders three children inside Col bootstrap component', () => {
    const wrapper = shallow(
      <ListCard>
        <p>first child</p>
        <p>second child</p>
        <p>third child</p>
      </ListCard>
    );
    
    expect(wrapper.find(Col)).toHaveLength(3);
  });
})


