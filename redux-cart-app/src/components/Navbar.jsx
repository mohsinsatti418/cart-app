import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div style={{ padding: 20, background: "black", color: "white" }}>
      🛒 Cart Items: {cartItems.length}
    </div>
  );
};

export default Navbar;
