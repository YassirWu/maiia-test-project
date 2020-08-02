import { IRootState } from "store/rootReducer";
import { createSelector } from 'reselect';

export const getShoppingCarts = (state: IRootState) => state.shoppingCart.carts;

export const getTotalShoppingCart = createSelector(getShoppingCarts, carts => {
  return carts.reduce<number>((result, cart) => result + cart.quantity, 0);
})
