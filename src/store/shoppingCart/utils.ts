import Product from "model/Product";
import Cart from "model/Cart";

export const incrementQuantityOfProduct = (product: Product, carts: Cart[]): Cart[] => {
  const isProductOnShoppingCarts = carts.some(cart => cart.product.id === product.id);

  if (!isProductOnShoppingCarts) {
    return [
      ...carts,
      {
        product: {...product},
        quantity: 1,
      },
    ];
  }

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

export const decrementQuantityOfProduct = (product: Product, carts: Cart[]): Cart[] => {
  return carts.reduce<Cart[]>((results, cart) => {
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
};
