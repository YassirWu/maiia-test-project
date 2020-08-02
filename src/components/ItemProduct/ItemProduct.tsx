import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Product from 'model/Product';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  title: {
    fontWeight: 'normal',
  },
  add: {
    fontWeight: 'bold',
    cursor: 'pointer',
    padding: '2px 5px',
    fontSize: '25px',
  }
})

export interface IItemProductProps {
  product: Product;
  onAddProductToShoppingCart: () => void;
}

const ItemProduct: React.FunctionComponent<IItemProductProps> = ({ product, onAddProductToShoppingCart }) => {
  const classes = useStyle();
  
  return (
    <div>
      <Card>
        <Card.Img src={product.thumbnailUrl} />
        <Card.Body>
          <Card.Title className={classes.title}>{product.title}
            <span onClick={onAddProductToShoppingCart} className={classes.add}>+</span>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemProduct;
