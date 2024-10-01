import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateQuantity, removeFromCart } from "../redux/cartActions";
import "../styles/index.css";

const CartScreen = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Cart Items:", cartItems);
  }, [cartItems]);

  const handleUpdateQuantity = (_id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity(_id, quantity));
    }
  };

  const handleRemoveFromCart = (_id) => {
    dispatch(removeFromCart(_id));
  };

  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item._id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-details">
              <p className="cart-name">{item.name}</p>
              <p className="cart-price">${item.price}</p>
              <p className="cart-quantity">Quantity: {item.quantity}</p>
            </div>
            <div className="cart-actions">
              <button
                onClick={() =>
                  handleUpdateQuantity(item._id, item.quantity + 1)
                }
              >
                +
              </button>
              <button
                onClick={() =>
                  handleUpdateQuantity(item._id, item.quantity - 1)
                }
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <button onClick={() => handleRemoveFromCart(item._id)}>
                Remove
              </button>
            </div>
          </div>
        ))
      )}
      <div className="cart-total">
        <h2>Total: ${totalPrice}</h2>
      </div>
    </div>
  );
};

export default CartScreen;
