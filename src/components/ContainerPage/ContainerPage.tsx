import * as React from 'react';
import Container from 'react-bootstrap/Container';

const ContainerPage: React.FunctionComponent<{}> = ({ children }) => (
  <Container fluid>
    {children}
  </Container>
);

export default ContainerPage;
