import ProductsControl from "./ProductsControl";
import ProductsGrid from "./ProductsGrid";

const Products = () => {
  return (
    <div>
      <ProductsControl />
      <div className="py-4">
        <ProductsGrid />
      </div>
    </div>
  );
};

export default Products;
