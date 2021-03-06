import { createRoutine } from 'redux-saga-routines';
import Product from 'model/Product';
import Cart from 'model/Cart';

const PREFIX_TYPE_ADD_SHOPPING_CART = 'ADD_SHOPPING_CART';
export const addToShoppingCartRoutine = createRoutine(PREFIX_TYPE_ADD_SHOPPING_CART, {
  request: (product: Product) => product,
  success: (carts: Cart[]) => carts,
});

const PREFIX_TYPE_REMOVE_SHOPPING_CART = 'REMOVE_SHOPPING_CART';
export const removeFromShoppingCartRoutine = createRoutine(PREFIX_TYPE_REMOVE_SHOPPING_CART, {
  request: (product: Product) => product,
  success: (carts: Cart[]) => carts,
});
