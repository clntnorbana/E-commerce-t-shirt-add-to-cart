import { Link } from "react-router-dom";
import { useState } from "react";

const Product = ({ product }) => {
  const [imageHovering, setimageHovering] = useState(false);

  return (
    <div className="product_card">
      <Link className="card-header" to={`/product/${product.id}`}>
        <div className="image-container">
          <img
            className="img"
            src={imageHovering ? product.subImg[1] : product.subImg[0]}
            alt={product.name}
            onMouseEnter={(e) => setimageHovering(true)}
            onMouseLeave={(e) => setimageHovering(false)}
          />
        </div>
        {product.sale && <p className="card-text-sale">Sale</p>}
      </Link>
      <div className="card-body">
        <p className="card-product-name">{product.name}</p>
        <div className="card-price">
          <span className="card-product-price">₱ {product.price}</span>
          {product.sale && (
            <span className="card-product-orig-price">
              P {product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
