import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import CartPayment from "../components/CartPayment";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <motion.div
      className="page"
      initial={{
        clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        opacity: 0,
      }}
      animate={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        opacity: 1,
      }}
      transition={{
        duration: 0.75,
      }}
    >
      <div className="container cart_page-container">
        {cart.cart.length > 0 ? (
          <>
            <CartItem />
            <CartPayment />
          </>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <h1>Your cart is empty</h1>
            <Link to={"/shop"}>Shop now</Link>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Cart;
