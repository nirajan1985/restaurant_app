import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  console.log("cartItem", cartItem);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center">
      <h1 className="m-4 p-4  text-2xl font-bold">Cart</h1>
      {cartItem.length === 0 ? (
        <h1>Cart is empty. Add item to cart!!</h1>
      ) : (
        <button
          className="m-2 p-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear cart
        </button>
      )}
      <div>
        {cartItem.map((item) => (
          <div
            className="flex justify-between items-center m-10 p-10 border-b-2"
            key={item?.card.info.id}
          >
            <div>
              <p>{item?.card.info.name}</p>
              <p>{item?.card.info.defaultPrice / 100}</p>
            </div>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/f10379c6bd1edbbb7ee38da07c78058f" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cart;
