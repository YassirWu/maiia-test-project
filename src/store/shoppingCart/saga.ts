import { takeEvery, select, put } from "redux-saga/effects";
import { addToShoppingCartRoutine, removeFromShoppingCartRoutine } from "./routines";
import Product from "model/Product";
import { Action } from "redux";
import { getShoppingCarts } from "./selectors";
import Cart from "model/Cart";
import { incrementQuantityOfProduct } from "./utils";

interface ActionPayload<T> extends Action {
  payload: T;
};

function* addToShoppingCart(action: ActionPayload<Product>) {
  const product: Product = {...action.payload}
  const state = yield select();
  const carts = getShoppingCarts(state);

  const isProductOnShoppingCarts = carts.some(cart => cart.product.id === product.id);

  if (!isProductOnShoppingCarts) {
    const newCarts: Cart[] = [
      ...carts,
      {
        product: {...product},
        quantity: 1,
      },
    ];

    yield put(addToShoppingCartRoutine.success(newCarts));
  } else {
    yield put(addToShoppingCartRoutine.success(incrementQuantityOfProduct(product, carts)));
  }
}

function* removeFromShoppingCart(action: ActionPayload<Product>) {
  const product: Product = {...action.payload}
  const state = yield select();
  const carts = getShoppingCarts(state);

  const newCarts = carts.reduce<Cart[]>((results, cart) => {
    if (product.id === cart.product.id) {
      const quantity = cart.quantity - 1;
      if(quantity === 0) {
        return results;
      }

      return [
        ...results,
        {
          ...cart,
          quantity,
        },
      ]
    }

    return [
      ...results,
      {...cart},
    ]
  }, []);

  yield put(removeFromShoppingCartRoutine.success(newCarts));
}

export function* shoppingCartSaga() {
  yield takeEvery(addToShoppingCartRoutine.REQUEST, addToShoppingCart);
  yield takeEvery(removeFromShoppingCartRoutine.REQUEST, removeFromShoppingCart);
}