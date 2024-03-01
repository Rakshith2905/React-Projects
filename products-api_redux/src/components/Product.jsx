import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice.js';
import { getProducts } from '../store/productSlice.js';
import statusCode from '../utils/statusCode.js';

function Product() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (status === statusCode.LOADING) {
    return <p>Loading...</p>;
  }
  if (status === statusCode.ERROR) {
    return (
      <Alert variant="danger">
        Something went wrong!!! Please try again later
      </Alert>
    );
  }

  const cards = products.map((product) => (
    <div className="col-md-3 mb-4">
      <Card key={product.id} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: '100px', height: '130px' }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer className="bg-white">
          <Button
            variant="primary"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div>
      <h3>Product Dashboard</h3>
      <div className="row">{cards}</div>
    </div>
  );
}

export default Product;
