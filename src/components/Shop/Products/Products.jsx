import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductsControl from "./ProductsControl";
import ProductsGrid from "./ProductsGrid";

const Products = () => {
  const [persistQuery, setPersistQuery] = useState("");
  const { query } = useSelector((state) => state.filter);

  useEffect(() => {
    if (persistQuery != query) {
      setPersistQuery(query);
      console.log(query);
    }
  }, [query, persistQuery]);

  return (
    <div>
      <ProductsControl />
      <div className="py-4">
        <ProductsGrid
          query={`limit=1&min=1&max=50000&skip=0&category=["65cf8d46ae3c6928ced6828a"]`}
        />
      </div>
    </div>
  );
};

export default Products;
