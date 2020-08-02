import { combineReducers } from 'redux';
import shoppingCartReducer from './shoppingCart';

const rootReducer = combineReducers({
  shoppingCart: shoppingCartReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
