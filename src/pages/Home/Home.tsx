import * as React from 'react';
import useSWR from 'swr';
import { getProductsApi } from 'utils/typicodeApi';
import { makeStyles } from '@material-ui/styles';
import CustomPagination from 'components/CustomPagination';
import ItemProduct from 'components/ItemProduct';
import Loader from 'components/Loader';
import ListProduct from 'components/ListProduct';
import Product from 'model/Product';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addToShoppingCartRoutine } from 'store/shoppingCart/routines';
import { IRootState } from 'store/rootReducer';
import { getTotalShoppingCart } from 'store/shoppingCart/selectors';
import Navigation from 'components/Navigation';

const useStyle = makeStyles({
  listProduct: {
    marginBottom: '20px',
  },
  pagination: {
    textAlign: 'center',
  },
});

type HomePageProps = {
  totalShoppingCart: number;
  onAddProductToShoppingCart: (product: Product) => void;
}

export const HomePage: React.FunctionComponent<HomePageProps> = ({
  totalShoppingCart,
  onAddProductToShoppingCart,
}) => {
  const [page, setPage] = React.useState(1);
  const { data, error } = useSWR(['/photos', page], (url, page) => getProductsApi(page));
  const classes = useStyle();

  if (error) return <p>error</p>;
  if (!data) return <Loader />;

  return (
    <>
      <Navigation totalShoppingCart={totalShoppingCart} />
      <div className={classes.listProduct}>
        <ListProduct>
          {data.products.map(product => (
            <ItemProduct
              key={product.id}
              product={product}
              onAddProductToShoppingCart={() => onAddProductToShoppingCart(product)}
            />
          ))}
        </ListProduct>
      </div>
      <div className={classes.pagination}>
        <CustomPagination
          numberTotalElement={data.total}
          numberPerPage={15}
          currentPage={page}
          onChange={setPage}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state: IRootState) => ({
  totalShoppingCart: getTotalShoppingCart(state),
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onAddProductToShoppingCart: (product: Product) => dispatch(addToShoppingCartRoutine.request(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
