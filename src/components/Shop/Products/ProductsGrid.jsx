import { useGetProductsQuery } from "../../../features/products/productsApi";
import Button from "../../ui/Button";
import Error from "../../ui/Error";
import Loader from "../../ui/Loader";
import { ProductCard } from "./ProductCard";

const ProductsGrid = ({ lodeMoreHidden }) => {
  const { data, isLoading, isError, error } = useGetProductsQuery();

  let content = null;
  if (isLoading) content = <Loader />;
  else if (!isLoading && isError) content = <Error message={error.status} />;
  else if (!isLoading && !isError && !data.length)
    content = <Error message="Nothing Found" />;
  else if (!isLoading && !isError && data.length)
    content = data.map((item) => <ProductCard key={item._id} product={item} />);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {content}
      </div>
      <div className="flex justify-center mt-4">
        {!isError && !isLoading && data.length && !lodeMoreHidden && (
          <Button
            className="bg-transparent text-black border border-slate-800 hover:bg-slate-100 text-sm px-2 py-1"
            title="Load More"
          />
        )}
      </div>
    </>
  );
};

export default ProductsGrid;
