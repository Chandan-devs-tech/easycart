import React from "react";
import { Card, Button } from "react-bootstrap";
import { addToCart } from "../redux/cartActions";
import { useDispatch } from "react-redux";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <Card className="my-3 p-3 rounded">
        <Card.Img src={product.image} variant="top" />

        <Card.Body>
          <Card.Title as="div" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>

          <Card.Text as="h3">${product.price}</Card.Text>

          <Button variant="primary" className="mt-2" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
