import { BsHandbag } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navigation from "./Navigation";
import Search from "./Search";

const Header = ({ products }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
    const pos = window.scrollY;
    setScrollPos(pos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cart = useSelector((state) => state.cart);

  const getQuantityTotal = () => {
    let totalQuantity = 0;

    cart.cart.forEach((item) => {
      totalQuantity += item.quantity;
    });
    return { totalQuantity };
  };

  return (
    <header className={scrollPos > 100 ? "header scroll" : "header"}>
      <div className="container header-container">
        <div className="sm-screen-menu">
          <RxHamburgerMenu onClick={() => setIsMenuActive(true)} />
        </div>
        <div className="header-left">
          <Link to={"/"} className="logo">
            <span>S H I R T</span>
          </Link>
          <Search products={products} />
        </div>
        <Navigation onActive={isMenuActive} setMenu={setIsMenuActive} />
        <Link to={"/cart"} className="btn-cart">
          <BsHandbag />
          {cart.cart.length > 0 && (
            <div className="cart-count">{getQuantityTotal().totalQuantity}</div>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
