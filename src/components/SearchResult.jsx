import { Link } from "react-router-dom";

const SearchResult = ({ search, onLinkClick, products }) => {
  return (
    <div className="search_result">
      {products
        .filter((product) => {
          return search.toLowerCase() === ""
            ? null
            : product.name.toLowerCase().includes(search);
        })
        .map((product, index) => (
          <Link
            className="result"
            to={`/product/${product.id}`}
            key={index}
            onClick={onLinkClick}
          >
            {product.name}
          </Link>
        ))}
    </div>
  );
};

export default SearchResult;
