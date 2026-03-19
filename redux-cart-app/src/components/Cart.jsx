import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, removeFromCart } from "../features/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error)   return <p>Error: {error}</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Cart</h2>
      {items.length === 0 && <p>Cart is empty</p>}
      {items.map((item) => (
        <div key={item._id} style={{ marginBottom: 10 }}>
          <span>{item.name}</span>         {/* ✅ item.name not item */}
          <span> — ${item.price}</span>    {/* ✅ item.price not item */}
          <span> x {item.quantity}</span>  {/* ✅ item.quantity not item */}
          <button
            onClick={() => dispatch(removeFromCart(item._id))}
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