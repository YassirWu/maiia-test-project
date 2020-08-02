import React from 'react';
import { shallow } from 'enzyme';
import CustomPagination from './CustomPagination';

describe('<CustomPagination />', () => {
  it('should render CustomPagination component', () => {

    const wrapper = shallow(
      <CustomPagination
        numberTotalElement={5000}
        numberPerPage={15}
        currentPage={2}
        onChange={jest.fn()}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
})


