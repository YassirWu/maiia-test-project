import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Product from 'model/Product';

export interface IItemProductProps {
  product: Product;
  onAddProduct: () => void;
}

const ItemProduct: React.FunctionComponent<IItemProductProps> = ({ product, onAddProduct }) => {
  return (
    <div>
      <Card>
        <Card.Img src={product.thumbnailUrl} />
        <Card.Body>
          <Card.Title>{product.title}
            <span onClick={onAddProduct}>+</span>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemProduct;
