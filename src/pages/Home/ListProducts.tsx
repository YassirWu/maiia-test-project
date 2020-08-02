import React from 'react';
import useSWR from 'swr';
import { getProductsApi } from 'utils/typicodeApi';
import { makeStyles } from '@material-ui/styles';
import CustomPagination from 'components/CustomPagination';
import ItemProduct from 'components/ItemProduct';
import Loader from 'components/Loader';
import ListCard from 'components/ListCard';
import Product from 'model/Product';

const useStyle = makeStyles({
  listProduct: {
    marginBottom: '20px',
  },
  pagination: {
    textAlign: 'center',
  },
});

type ListProductsProps = {
  search?: string;
  onAddProductToShoppingCart: (product: Product) => void;
  page: number;
  setPage: (page: number) => void;
}

const ListProducts: React.FunctionComponent<ListProductsProps> = ({
  search,
  onAddProductToShoppingCart,
  page,
  setPage
}) => {
  const { data, error } = useSWR(['/photos', page, search], (url, page, search) => getProductsApi(page, search));
  const classes = useStyle();

  if (error) return <p>error</p>;
  if (!data) return <Loader />;

  return (
    <>
      <p>There are {data.total} results</p>
      <div className={classes.listProduct}>
        <ListCard>
          {data.products.map(product => (
            <ItemProduct
              key={product.id}
              product={product}
              onAddProductToShoppingCart={() => onAddProductToShoppingCart(product)}
            />
          ))}
        </ListCard>
      </div>
      {data.total > 0 && (
        <div className={classes.pagination}>
          <CustomPagination
            numberTotalElement={data.total}
            numberPerPage={15}
            currentPage={page}
            onChange={setPage}
          />
        </div>
      )}
    </>
  )
}

export default ListProducts;
