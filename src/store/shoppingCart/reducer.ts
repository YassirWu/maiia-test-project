import { Action } from "redux"
import { addToShoppingCartRoutine } from "./routines";
import Cart from "model/Cart";

type ShoppingCartState = {
  carts: Cart[];
}

const initialState: ShoppingCartState = {
  carts: []
}
interface AddToShoppingCartAction extends Action {
  payload: Cart[];
}
type Actions = Action | AddToShoppingCartAction;

const reducer = (state = initialState, action: Actions): ShoppingCartState => {
  switch (action.type) {
    case addToShoppingCartRoutine.SUCCESS:
      return {
        ...state,
        carts: (action as AddToShoppingCartAction).payload,
      }
  
    default:
      return state;
  }
}

export default reducer;
