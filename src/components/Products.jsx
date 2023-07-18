import Product from "./Product";

const Products = ({ products }) => {
  return (
    <div className="product_list">
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
