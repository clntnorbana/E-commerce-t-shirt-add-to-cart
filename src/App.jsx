import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { products } from "./data/products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(products);
  }, []);

  const location = useLocation();

  return (
    <div>
      <Header products={products} />
      <ScrollToTop />
      <AnimatePresence mode="wait" initial={false}>
        <Outlet
          context={[items]}
          key={Math.floor(Math.random() * 1000) + 1}
          location={location}
        />
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
