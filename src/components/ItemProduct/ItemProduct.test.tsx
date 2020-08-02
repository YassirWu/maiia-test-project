import React from 'react';
import { shallow } from 'enzyme';
import ItemProduct from './ItemProduct';
import Product from 'model/Product';

describe('<ItemProduct />', () => {
  it('should render ItemProduct component', () => {
    const product: Product = {
      id: 1,
      albumId: 2,
      title: 'my product',
      thumbnailUrl: 'thumb url',
      url: 'url',
    };

    const wrapper = shallow(
      <ItemProduct product={product} onAddProduct={jest.fn()} />
    );

    expect(wrapper).toMatchSnapshot();
  });
})


