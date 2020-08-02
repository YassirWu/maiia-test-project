import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  root: {
    marginBottom: '20px',
  },
})

type NotificationProps = {
  totalShoppingCart: number,
}

const Navigation: React.FunctionComponent<NotificationProps> = ({ totalShoppingCart }) => {
  const classes = useStyle();

  return (
    <Navbar className={classes.root}>
      <Navbar.Brand>Product Website</Navbar.Brand>
      <Navbar.Text>Panier {totalShoppingCart}</Navbar.Text>
    </Navbar>
  );
};

export default Navigation;
