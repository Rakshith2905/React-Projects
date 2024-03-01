import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { removeFromCart } from '../../store/cartSlice.js';

function Cart() {
  const productCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const cards = productCart.map((product) => (
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
            variant="danger"
            onClick={() => dispatch(removeFromCart(product.id))}
          >
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div>
      <div className="row">
        {productCart.length == 0 ? <h5>Cart is empty</h5> : cards}
      </div>
    </div>
  );
}

export default Cart;
