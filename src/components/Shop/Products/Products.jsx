import Button from "../../ui/Button";
import ProductsControl from "./ProductsControl";
import ProductsGrid from "./ProductsGrid";

const Products = () => {
  return (
    <div>
      <ProductsControl />
      <div className="py-4">
        <ProductsGrid />
      </div>
      <div className="flex justify-center">
        <Button
          className="bg-transparent text-black border border-slate-800 hover:bg-slate-100 text-sm px-2 py-1"
          title="Load More"
        />
      </div>
    </div>
  );
};

export default Products;
