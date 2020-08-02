import Product from "model/Product";
import Cart from "model/Cart";

export const incrementQuantityOfProduct = (product: Product, carts: Cart[]): Cart[] => {
  return carts.reduce<Cart[]>((result, cart) => {
    if (cart.product.id === product.id) {
      const quantity = cart.quantity + 1;
      return [
        ...result,
        { ...cart, quantity },
      ];
    }

    return [
      ...result,
      {...cart},
    ];
  }, []);
};
