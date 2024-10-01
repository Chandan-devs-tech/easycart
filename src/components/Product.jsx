import React from "react";
import { Card, Button } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <div>
      <Card className="my-3 p-3 rounded">
        <Card.Img src={product.image} variant="top" />

        <Card.Body>
          <Card.Title as="div" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>

          <Card.Text as="h3">${product.price}</Card.Text>

          <Button
            variant="primary"
            className="mt-2"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

// Mock function to handle Add to Cart
const handleAddToCart = (product) => {
  console.log(`${product.name} added to cart`);
};

export default Product;
