import Banner from "../components/Banner";
import Products from "../components/Products";
import { useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const [items] = useOutletContext();

  const products = items.filter((item) => item.new === true);

  return (
    <motion.div
      className="page"
      initial={{
        clipPath: "polygon(100% 0, 54% 46%, 0 100%, 0 100%)",
        opacity: 0,
      }}
      animate={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        opacity: 1,
      }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.75,
        delay: 0.1,
      }}
    >
      <Banner />
      <div className="container homepage-body">
        <h1 className="text-heading">NEW ARRIVALS</h1>
        <Products products={products} />
      </div>
    </motion.div>
  );
};

export default Home;
