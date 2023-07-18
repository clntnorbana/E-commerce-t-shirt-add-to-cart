import { useOutletContext } from "react-router-dom";
import Products from "../components/Products";
import { motion } from "framer-motion";

const ShopAll = () => {
  const [items] = useOutletContext();

  return (
    <motion.div
      className="page"
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{ opacity: 0, y: 25 }}
      transition={{
        duration: 0.5,
        delay: 0.1,
      }}
    >
      <div className="container">
        <Products products={items} />
      </div>
    </motion.div>
  );
};

export default ShopAll;
