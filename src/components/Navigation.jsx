import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const Navigation = ({ onActive, setMenu }) => {
  const closeMenu = () => {
    setMenu(false);
  };

  const links = [
    {
      name: "Shop All",
      url: "/shop",
    },
    {
      name: "Women",
      url: "/shop/women",
    },
    {
      name: "Men",
      url: "/shop/men",
    },
    {
      name: "Sale",
      url: "/shop/sale",
    },
  ];

  return (
    <nav className={onActive ? "navigation active" : "navigation"}>
      <BsArrowLeft className="btn_menu-back" onClick={closeMenu} />
      {links.map((link, index) => (
        <Link key={index} className="link" to={link.url} onClick={closeMenu}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
