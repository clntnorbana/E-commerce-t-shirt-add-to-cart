import { useDispatch, useSelector } from "react-redux";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import {
  removeItem,
  incrementQuantity,
  decrementQuantity,
} from "../redux/cartSlice";

const CartItem = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart">
      <h1 style={{ padding: "0 10px" }}>Your Cart</h1>
      {cart.cart.length > 0 && (
        <div className="cart-items">
          {cart.cart.map((item, index) => (
            <div className="cart-item-card" key={item.id}>
              <img className="cart-img" src={item.image} alt={item.image} />
              <div className="cart-info">
                <div className="cart-info-top">
                  <span className="cart-name">{item.name}</span>
                  <span className="cart-size">
                    Size: <span>{item.size}</span>
                  </span>
                  <span className="cart-price">
                    ₱ {item.price * item.quantity}
                  </span>
                </div>
                <div className="box-quantity">
                  <AiOutlineMinus
                    className="btn-quantity quantity-add"
                    onClick={() => dispatch(decrementQuantity(item.id))}
                  />
                  <span className="quantity-text">
                    <span>{item.quantity}</span> x {item.price}
                  </span>
                  <AiOutlinePlus
                    className="btn-quantity quantity-minus"
                    onClick={() => dispatch(incrementQuantity(item.id))}
                  />
                </div>
              </div>
              <CiCircleRemove
                className="btn-cart-remove"
                onClick={() => handleRemoveItem(item.id)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartItem;
