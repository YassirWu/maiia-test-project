import * as React from 'react';
import useSWR from 'swr';
import { getProductsApi } from 'utils/typicodeApi';
import { makeStyles } from '@material-ui/styles';
import CustomPagination from 'components/CustomPagination';
import ItemProduct from 'components/ItemProduct';
import Loader from 'components/Loader';
import ListProduct from 'components/ListProduct';

const useStyle = makeStyles({
  listProduct: {
    marginBottom: '20px',
  },
  pagination: {
    textAlign: 'center',
  },
});

export default function HomePage() {
  const [page, setPage] = React.useState(1);
  const { data, error } = useSWR(['/photos', page], (url, page) => getProductsApi(page));
  const classes = useStyle();

  if (error) return <p>error</p>;
  if (!data) return <Loader />;

  const onAddProduct = () => {} // TODO next feature

  return (
    <>
      <div className={classes.listProduct}>
        <ListProduct>
          {data.products.map(product => (
            <ItemProduct key={product.id} product={product} onAddProduct={onAddProduct} />
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
