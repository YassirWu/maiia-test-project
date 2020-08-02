import { takeEvery, select, put } from "redux-saga/effects";
import { addToShoppingCartRoutine } from "./routines";
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

export function* shoppingCartSaga() {
  yield takeEvery(addToShoppingCartRoutine.REQUEST, addToShoppingCart);
}