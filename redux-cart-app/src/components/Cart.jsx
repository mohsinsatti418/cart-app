import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: 20 }}>
      <h2>Cart</h2>
      {items.map((item, index) => (
        <div key={index}>
          {item}
          <button
            onClick={() => dispatch(removeFromCart(index))}
            style={{ marginLeft: 10 }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
