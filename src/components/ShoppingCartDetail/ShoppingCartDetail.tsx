import React from 'react';
import CustomModal from 'components/Modal';
import Cart from 'model/Cart';
import ShoppingCartItem from './ShoppingCartItem';
import { makeStyles } from '@material-ui/styles';
import Product from 'model/Product';

const useStyle = makeStyles({
  title: {
    marginBottom: '20px',
  },
})

type ShoppingCartDetailProps = {
  carts: Cart[];
  total: number,
  show: boolean;
  onHideModal: () => void;
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
}

const ShoppingCartDetail: React.FunctionComponent<ShoppingCartDetailProps> = ({
  carts,
  total,
  show,
  onHideModal,
  addProduct,
  removeProduct,
}) => {
  const classes = useStyle();

  return (
    <CustomModal title="Shopping Cart" show={show} onHideModal={onHideModal}>
      <h5 className={classes.title}>Your shopping cart { total ? <span>({total})</span> : ''}</h5>
      {total === 0 ? (
        <p>You have no product on shopping cart</p>
      ) : (
        <>
          {carts.map(cart => (
            <ShoppingCartItem
              key={cart.product.id}
              cart={cart}
              add={() => addProduct(cart.product)}
              remove={() => removeProduct(cart.product)}
            />
          ))}
        </>
      )}
    </CustomModal>
  )
}

export default ShoppingCartDetail;
