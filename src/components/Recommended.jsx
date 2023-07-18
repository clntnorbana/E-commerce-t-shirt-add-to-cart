import { products as items } from "../data/products";
import { Link } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";

const Recommended = ({ productProp }) => {
  const recommended = items.filter(
    (item) =>
      item.recommended === true &&
      item.gender === productProp.gender &&
      item.id !== productProp.id
  );

  return (
    <div className="recommended">
      {recommended.slice(0, 5).map((item, index) => (
        <div key={index}>
          <Link to={`/product/${item.id}`}>
            <img className="img" src={item.subImg[0]} alt={item.name} />
          </Link>
          <span className="product-name">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Recommended;
