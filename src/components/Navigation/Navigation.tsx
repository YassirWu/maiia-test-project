import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  root: {
    marginBottom: '20px',
  },
  shoppingCartTotal: {
    fontWeight: 'bold',
  },
  collapse: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputSearch: {
    marginRight: '15px',
  }
})

type NotificationProps = {
  totalShoppingCart: number,
  onClickShoppingCart: () => void,
  searchByName: (value: string) => void;
}

const Navigation: React.FunctionComponent<NotificationProps> = ({
  totalShoppingCart,
  onClickShoppingCart,
  searchByName,
}) => {
  const [search, setSearch] = React.useState('');
  const classes = useStyle();

  return (
    <Navbar className={classes.root} expand="lg">
      <Navbar.Brand>Product Website</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={classes.collapse}>
        <Navbar.Text>
          <Button onClick={onClickShoppingCart} variant="light">
            Shopping cart: <span className={classes.shoppingCartTotal}>{totalShoppingCart}</span>
          </Button>
        </Navbar.Text>
        <Form inline onSubmit={e => {
          e.preventDefault();
          searchByName(search);
        }}>
          <Form.Control type="text" placeholder="Search by name" value={search} onChange={e => setSearch(e.target.value)} className={classes.inputSearch} />
          <Button variant="primary" type="submit">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
