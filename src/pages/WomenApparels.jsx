import { useOutletContext } from "react-router-dom";
import Products from "../components/Products";
import { motion } from "framer-motion";

const WomenApparels = () => {
  const [items] = useOutletContext();

  const products = items.filter((item) => item.gender === "female");

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
        delay: 0.2,
      }}
    >
      <div className="container">
        <h1 className="text-heading">WOMEN</h1>
        <Products products={products} />
      </div>
    </motion.div>
  );
};

export default WomenApparels;
