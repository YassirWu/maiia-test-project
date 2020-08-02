import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Product from 'model/Product';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  root: {
    marginBottom: '10px',
  },
  title: {
    fontWeight: 'normal',
  },
  add: {
    borderRadius: '20px'
  }
})

export interface IItemProductProps {
  product: Product;
  onAddProductToShoppingCart: () => void;
}

const ItemProduct: React.FunctionComponent<IItemProductProps> = ({ product, onAddProductToShoppingCart }) => {
  const classes = useStyle();
  
  return (
    <Card className={classes.root}>
      <Card.Img src={product.thumbnailUrl} />
      <Card.Body>
        <Card.Title className={classes.title}><p>{product.title}</p>
          <Button onClick={onAddProductToShoppingCart} variant="danger" className={classes.add}>+</Button>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default ItemProduct;
