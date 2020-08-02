import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  root: {
    marginBottom: '20px',
  },
})

const Navigation: React.FunctionComponent<{}> = () => {
  const classes = useStyle();

  return (
    <Navbar className={classes.root}>
      <Navbar.Brand>Product Website</Navbar.Brand>
    </Navbar>
  );
};

export default Navigation;
