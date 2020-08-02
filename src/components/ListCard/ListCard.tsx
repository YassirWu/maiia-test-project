import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ListCard: React.FunctionComponent<{}> = ({ children }) => {
  return (
    <Row>
      {React.Children.map(children, child => (
        <Col xs={12} sm={6} md={4} lg={2}>
          {child}
        </Col>
      ))}
    </Row>
  )
}

export default ListCard;
