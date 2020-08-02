import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  root: {
    marginBottom: '20px',
  },
  shoppingCartTotal: {
    fontWeight: 'bold',
  }
})

type NotificationProps = {
  totalShoppingCart: number,
  onClickShoppingCart: () => void,
}

const Navigation: React.FunctionComponent<NotificationProps> = ({
  totalShoppingCart,
  onClickShoppingCart,
}) => {
  const classes = useStyle();

  return (
    <Navbar className={classes.root}>
      <Navbar.Brand>Product Website</Navbar.Brand>
      <Navbar.Text>
        <Button onClick={onClickShoppingCart} variant="light">
          Shopping cart: <span className={classes.shoppingCartTotal}>{totalShoppingCart}</span>
        </Button>
      </Navbar.Text>
    </Navbar>
  );
};

export default Navigation;
