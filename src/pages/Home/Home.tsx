import * as React from 'react';
import Product from 'model/Product';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addToShoppingCartRoutine, removeFromShoppingCartRoutine } from 'store/shoppingCart/routines';
import { IRootState } from 'store/rootReducer';
import { getTotalShoppingCart, getShoppingCarts } from 'store/shoppingCart/selectors';
import Navigation from 'components/Navigation';
import ShoppingCartDetail from 'components/ShoppingCartDetail';
import Cart from 'model/Cart';
import ListProducts from './ListProducts';



type HomePageProps = {
  carts: Cart[];
  totalShoppingCart: number;
  onAddProductToShoppingCart: (product: Product) => void;
  onRemoveProductFromShoppingCart: (product: Product) => void;
}

export const HomePage: React.FunctionComponent<HomePageProps> = ({
  carts,
  totalShoppingCart,
  onAddProductToShoppingCart,
  onRemoveProductFromShoppingCart,
}) => {
  const [search, setSearch] = React.useState<string | undefined>(undefined);
  const [page, setPage] = React.useState(1);
  const [showShoppingCart, setShowShoppingCart] = React.useState(false);

  return (
    <>
      <Navigation
        totalShoppingCart={totalShoppingCart}
        onClickShoppingCart={() => setShowShoppingCart(true)}
        searchByName={(value) => {
          setSearch(value);
          setPage(1);
        }}
      />
      <ListProducts
        search={search}
        onAddProductToShoppingCart={onAddProductToShoppingCart}
        page={page}
        setPage={setPage}
      />
      <ShoppingCartDetail
        carts={carts}
        total={totalShoppingCart}
        show={showShoppingCart}
        onHideModal={() => setShowShoppingCart(false)}
        addProduct={onAddProductToShoppingCart}
        removeProduct={onRemoveProductFromShoppingCart}
      />
    </>
  );
};

const mapStateToProps = (state: IRootState) => ({
  totalShoppingCart: getTotalShoppingCart(state),
  carts: getShoppingCarts(state),
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onAddProductToShoppingCart: (product: Product) => dispatch(addToShoppingCartRoutine.request(product)),
  onRemoveProductFromShoppingCart: (product: Product) => dispatch(removeFromShoppingCartRoutine.request(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
