import { useOutletContext } from "react-router-dom";
import Products from "../components/Products";
import { motion } from "framer-motion";

const MenApparels = () => {
  const [items] = useOutletContext();

  const products = items.filter((item) => item.gender === "male");

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
        <h1 className="text-heading">MEN</h1>
        <Products products={products} />
      </div>
    </motion.div>
  );
};

export default MenApparels;
