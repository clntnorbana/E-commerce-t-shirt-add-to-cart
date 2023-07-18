import { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import SearchResult from "./SearchResult";

const Search = ({ products }) => {
  const [search, setSearch] = useState("");
  const [showResult, setShowResult] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowResult(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="search-box">
      <button type="button">
        <AiOutlineSearch />
      </button>
      <input
        type="search"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setShowResult(true)}
        ref={ref}
      />
      {showResult && (
        <SearchResult
          search={search}
          onLinkClick={() => setShowResult(false)}
          products={products}
        />
      )}
    </div>
  );
};

export default Search;
