import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const Products = () => {
  const dispatch = useDispatch();

  const products = ["Shoes", "Watch", "Phone"];

  return (
    <div style={{ padding: 20 }}>
      <h2>Products</h2>
      {products.map((item, index) => (
        <div key={index}>
          {item}
          <button
            onClick={() => dispatch(addToCart(item))}
            style={{ marginLeft: 10 }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
