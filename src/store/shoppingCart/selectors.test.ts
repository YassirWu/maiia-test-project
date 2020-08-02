import { getShoppingCarts, getTotalShoppingCart } from './selectors';
import { IRootState } from 'store/rootReducer';

describe('shoppingCart selectors', () => {
  describe('getShoppingCarts', () => {
    it('should return shopping carts from state', () => {
      const carts = [
        {
          product: {
            id: 1,
            albumId: 1,
            title: 'my product',
            url: 'url',
            thumbnailUrl: 'thumbnailUrl',
          },
          quantity: 7,
        },
        {
          product: {
            id: 2,
            albumId: 1,
            title: 'my product',
            url: 'url',
            thumbnailUrl: 'thumbnailUrl',
          },
          quantity: 5,
        },
      ];
      const state = {
        shoppingCart: {
          carts,
        }
      };

      expect(getShoppingCarts(state as IRootState)).toEqual(carts);
    });
  });

  describe('getTotalShoppingCart', () => {
    it('should return 0 when no cart', () => {
      const state = {
        shoppingCart: {
          carts: []
        }
      };

      expect(getTotalShoppingCart(state)).toEqual(0);
    });

    it('should return quantity for single cart', () => {
      const state = {
        shoppingCart: {
          carts: [
            {
              product: {
                id: 1,
                albumId: 1,
                title: 'my product',
                url: 'url',
                thumbnailUrl: 'thumbnailUrl',
              },
              quantity: 7,
            },
          ]
        }
      };

      expect(getTotalShoppingCart(state)).toEqual(7);
    });

    it('should return quantity for multiple cart', () => {
      const state = {
        shoppingCart: {
          carts: [
            {
              product: {
                id: 1,
                albumId: 1,
                title: 'my product',
                url: 'url',
                thumbnailUrl: 'thumbnailUrl',
              },
              quantity: 7,
            },
            {
              product: {
                id: 2,
                albumId: 1,
                title: 'my product',
                url: 'url',
                thumbnailUrl: 'thumbnailUrl',
              },
              quantity: 6,
            },
            {
              product: {
                id: 3,
                albumId: 1,
                title: 'my product',
                url: 'url',
                thumbnailUrl: 'thumbnailUrl',
              },
              quantity: 12,
            },
          ]
        }
      };

      expect(getTotalShoppingCart(state as IRootState)).toEqual(25);
    });
  });
});
