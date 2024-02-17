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
    }
  }, [query, persistQuery]);

  return (
    <div>
      <ProductsControl />
      <div className="py-4">
        <ProductsGrid query={query} />
      </div>
    </div>
  );
};

export default Products;
