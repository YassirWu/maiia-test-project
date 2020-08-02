import { incrementQuantityOfProduct, decrementQuantityOfProduct } from './utils';
import Cart from 'model/Cart';

const carts: Cart[] = [
  {
    product: {
      id: 1,
      albumId: 1,
      title: 'my first product',
      url: 'url',
      thumbnailUrl: 'thumbnailUrl',
    },
    quantity: 1,
  },
  {
    product: {
      id: 2,
      albumId: 1,
      title: 'my second product',
      url: 'url',
      thumbnailUrl: 'thumbnailUrl',
    },
    quantity: 5,
  },
  {
    product: {
      id: 3,
      albumId: 1,
      title: 'my third product',
      url: 'url',
      thumbnailUrl: 'thumbnailUrl',
    },
    quantity: 5,
  },
];

describe('incrementQuantityOfProduct', () => {
  it('should add a new product on the list of carts', () => {
    const product = {
      id: 6,
      albumId: 1,
      title: 'my sixth product',
      url: 'url',
      thumbnailUrl: 'thumbnailUrl',
    };

    const result = incrementQuantityOfProduct(product, carts);

    expect(result).toHaveLength(4);
    expect(result[3]).toEqual({
      product: {
        id: 6,
        albumId: 1,
        title: 'my sixth product',
        url: 'url',
        thumbnailUrl: 'thumbnailUrl',
      },
      quantity: 1,
    });
  });

  it('should increment a product', () => {
    const product = {
      id: 2,
      albumId: 1,
      title: 'my second product',
      url: 'url',
      thumbnailUrl: 'thumbnailUrl',
    };

    const result = incrementQuantityOfProduct(product, carts);

    expect(result).toHaveLength(3);
    expect(result[1].quantity).toEqual(6);
  });
});

describe('decrementQuantityOfProduct', () => {
  it('should not modify the carts because the product is not in the list', () => {
    const product = {
      id: 4,
      albumId: 1,
      title: 'my fourth product',
      url: 'url',
      thumbnailUrl: 'thumbnailUrl',
    };

    const result = decrementQuantityOfProduct(product, carts);

    expect(result).toHaveLength(3);
    expect(result).toEqual(carts);
  });

  it('should decrement a product', () => {
    const product = {
      id: 3,
      albumId: 1,
      title: 'my third product',
      url: 'url',
      thumbnailUrl: 'thumbnailUrl',
    };

    const result = decrementQuantityOfProduct(product, carts);

    expect(result).toHaveLength(3);
    expect(result[2].quantity).toEqual(4);
  });

  it('should remove a product from list when the quantity was 1', () => {
    const product = {
      id: 1,
      albumId: 1,
      title: 'my first product',
      url: 'url',
      thumbnailUrl: 'thumbnailUrl',
    };

    const result = decrementQuantityOfProduct(product, carts);

    expect(result).toHaveLength(2);
  });
});
