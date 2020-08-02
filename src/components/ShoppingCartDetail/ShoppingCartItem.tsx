import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Cart from 'model/Cart';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  root: {
    marginBottom: '20px',
  },
  image: {
    width: '100%',
  },
  button: {
    marginRight: '15px',
    borderRadius: '20px'
  }
})

type ShoppingCartItemProps = {
  cart: Cart;
  add: () => void;
  remove: () => void;
}

const ShoppingCartItem: React.FunctionComponent<ShoppingCartItemProps> = ({ cart, add, remove }) => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Row>
        <Col xs={3}>
          <img src={cart.product.thumbnailUrl} alt={cart.product.title} className={classes.image} />
        </Col>
        <Col xs={9}>
          <h6>{cart.product.title}</h6>
          <p>Quantity: {cart.quantity}</p>
          <div>
            <Button onClick={remove} variant="light" className={classes.button}>-</Button>
            <Button onClick={add} variant="light" className={classes.button}>+</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ShoppingCartItem;
