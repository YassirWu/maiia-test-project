import React from 'react';
import { shallow } from 'enzyme';
import ShoppingCartItem from './ShoppingCartItem';
import Cart from 'model/Cart';

describe('<ShoppingCartItem />', () => {
  it('should render ShoppingCartItem component', () => {
    const cart: Cart = {
      product: {
        id: 1,
        albumId: 1,
        title: 'my product',
        url: 'url',
        thumbnailUrl: 'thumbnailUrl',
      },
      quantity: 7,
    };
    
    const wrapper = shallow(<ShoppingCartItem cart={cart} add={jest.fn} remove={jest.fn} />);

    expect(wrapper).toMatchSnapshot();
  });
})


