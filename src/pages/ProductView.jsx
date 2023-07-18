import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";
import ProductViewDetail from "../components/ProductViewDetail";
import { motion } from "framer-motion";

const ProductView = () => {
  const { id } = useParams();
  const [items] = useOutletContext();

  const getProduct = items.filter((item) => item.id == id);

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
      <div className="container">
        {getProduct.map((product) => (
          <ProductViewDetail key={product.id} product={product} />
        ))}
      </div>
    </motion.div>
  );
};

export default ProductView;
