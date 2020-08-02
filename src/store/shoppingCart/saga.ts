import { takeEvery, select, put } from "redux-saga/effects";
import { addToShoppingCartRoutine, removeFromShoppingCartRoutine } from "./routines";
import Product from "model/Product";
import { getShoppingCarts } from "./selectors";
import { incrementQuantityOfProduct, decrementQuantityOfProduct } from "./utils";
import { ActionPayload } from "store/model";

function* addToShoppingCart(action: ActionPayload<Product>) {
  const product: Product = {...action.payload}
  const state = yield select();
  const carts = getShoppingCarts(state);

  yield put(addToShoppingCartRoutine.success(incrementQuantityOfProduct(product, carts)));
}

function* removeFromShoppingCart(action: ActionPayload<Product>) {
  const product: Product = {...action.payload}
  const state = yield select();
  const carts = getShoppingCarts(state);

  yield put(removeFromShoppingCartRoutine.success(decrementQuantityOfProduct(product, carts)));
}

export function* shoppingCartSaga() {
  yield takeEvery(addToShoppingCartRoutine.REQUEST, addToShoppingCart);
  yield takeEvery(removeFromShoppingCartRoutine.REQUEST, removeFromShoppingCart);
}