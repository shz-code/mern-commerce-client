import { useGetProductsQuery } from "../../../features/products/productsApi";
import Error from "../../ui/Error";
import Loader from "../../ui/Loading";
import { ProductCard } from "./ProductCard";

const ProductsGrid = () => {
  const { data, isLoading, isError, error } = useGetProductsQuery();

  let content = null;
  if (isLoading) content = <Loader />;
  else if (!isLoading && isError) content = <Error message={error.message} />;
  else if (!isLoading && !isError && !data.length)
    content = <Error message="Nothing Found" />;
  else if (!isLoading && !isError && data.length)
    content = data.map((item) => <ProductCard key={item._id} product={item} />);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {content}
    </div>
  );
};

export default ProductsGrid;
