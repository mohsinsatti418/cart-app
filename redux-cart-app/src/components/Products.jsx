import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const Products = () => {
  const dispatch = useDispatch();

  const products = [
  { name: "Shoes", price: 49.99 },
  { name: "Watch", price: 99.99 },
  { name: "Phone", price: 299.99 },
];

  return (
    <div style={{ padding: 20 }}>
      <h2>Products</h2>
      {products.map((item, index) => (
        <div key={index}>
           {item.name} — ${item.price}
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
