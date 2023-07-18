import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartPayment = () => {
  const cart = useSelector((state) => state.cart);

  let shippingFee = 120;
  let bonusPrice = 498;

  // get total
  const getTotal = () => {
    let subTotal = 0;
    let totalPrice = 0;
    let totalQuantity = 0;

    cart.cart.forEach((item) => {
      subTotal += item.price * item.quantity;
      totalPrice = subTotal + shippingFee;
      totalQuantity += item.quantity;
    });
    return { subTotal, totalPrice, totalQuantity };
  };

  // format currency
  const formatCurrency = new Intl.NumberFormat("en-us", {
    currency: "PHP",
    style: "currency",
  });

  return (
    <div className="cart_page-right">
      <div className="text-top">
        {getTotal().subTotal < bonusPrice ? (
          <>
            {bonusPrice - getTotal().subTotal} PHP left until free shipping!{" "}
            <Link to={"/shop"}>Continue Shopping</Link>
          </>
        ) : (
          <>You are getting free shipping!</>
        )}{" "}
      </div>
      <form className="form-voucher">
        <input type="text" placeholder="Voucer Code" />
        <button>Add</button>
      </form>
      <div className="total-payment">
        <div className="box">
          <span>Subtotal ({getTotal().totalQuantity})</span>
          <span>{formatCurrency.format(getTotal().subTotal)}</span>
        </div>
        <div className="box">
          <span>Shipping</span>
          <span>
            {getTotal().subTotal < bonusPrice
              ? formatCurrency.format(shippingFee)
              : "Free"}
          </span>
        </div>
        <div className="box total">
          <span>Total</span>
          <span>
            {getTotal().subTotal < bonusPrice ? (
              <>{formatCurrency.format(getTotal().totalPrice)}</>
            ) : (
              <>{formatCurrency.format(getTotal().subTotal)}</>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartPayment;
