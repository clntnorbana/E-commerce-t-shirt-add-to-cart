import { useState } from "react";
import { BsHandbag } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import Recommended from "./Recommended";
import { toast } from "react-toastify";

const ProductViewDetail = ({ product }) => {
  const [image, setImage] = useState(product.subImg[0]);
  const [size, setSize] = useState("");

  const info = [
    "fit",
    "model is wearing",
    "fabric",
    "print / embroidery",
    "supplier",
    "delivery information",
    "article number",
  ];

  const setMainImage = (index) => {
    setImage(product.subImg[index]);
  };

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const item = {
      id: product.id + size,
      name: product.name,
      image: product.subImg[0],
      price: product.price,
      size: size,
    };

    dispatch(addToCart(item));
  };

  return (
    <div className="product_detail">
      <div className="container">
        <div className="product-detail-container">
          <div className="left-container">
            <div className="main-image-container">
              <img className="main-image" src={image} alt={product.name} />
            </div>
            <div className="sub-images">
              {product.subImg.map((subImg, index) => (
                <img
                  className={
                    image === subImg ? "sub-image active" : "sub-image"
                  }
                  src={subImg}
                  key={index}
                  alt={subImg[index]}
                  onClick={() => setMainImage(index)}
                />
              ))}
            </div>
          </div>
          <div className="right-container">
            <span className="product-name">{product.name}</span>
            <span className="product-info">{product.detail}</span>
            <span className="product-price">₱ {product.price}</span>
            <div className="box_add-to-cart">
              <div className="select-box">
                <select
                  defaultValue={"default"}
                  className="select-input"
                  name="size"
                  onChange={(e) => setSize(e.target.value)}
                >
                  <option value={"default"} disabled hidden>
                    Choose Size
                  </option>
                  {product.sizes.map((size, index) => (
                    <option value={size} key={index}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
              <button
                disabled={!size}
                className="btn_add-to-cart"
                onClick={handleAddToCart}
              >
                {!size ? "CHOOSE SIZE FIRST" : "ADD TO CART"}
                <BsHandbag className="icon-bag" />
              </button>
            </div>
            <div className="other-info">
              {info.map((item, index) => (
                <div className="other-info-item" key={index}>
                  <span>+</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="box_recommended">
          <h1>You may also like</h1>
          <Recommended productProp={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductViewDetail;
