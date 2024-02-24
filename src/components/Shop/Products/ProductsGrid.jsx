import { useDispatch } from "react-redux";
import { updateSkip } from "../../../features/filter/filterSlice";
import { useGetProductsQuery } from "../../../features/products/productsApi";
import Button from "../../ui/Button";
import Error from "../../ui/Error";
import Loader from "../../ui/Loader";
import { ProductCard } from "./ProductCard";

const ProductsGrid = ({ query, lodeMoreHidden, mini = false }) => {
  const { data, isLoading, isError, error } = useGetProductsQuery(query, {
    refetchOnMountOrArgChange: true,
  });

  const dispatch = useDispatch();

  let content = null;
  if (isLoading) content = <Loader />;
  else if (!isLoading && isError) content = <Error message={error.data} />;
  else if (!isLoading && !isError && !data.products.length)
    content = <Error message="Nothing Found" />;
  else if (!isLoading && !isError && data.products.length)
    content = data.products.map((item) => (
      <ProductCard key={item._id} product={item} />
    ));

  return (
    <>
      <div
        className={`columns-2 sm:columns-1  gap-4 ${
          mini ? "md:columns-4 xl:columns-5" : "md:columns-2 xl:columns-3"
        }`}
      >
        {content}
      </div>
      <div className="flex justify-center mt-4">
        {!isError && !isLoading && data.loadMore && !lodeMoreHidden && (
          <Button
            className="bg-transparent text-black border border-slate-800 hover:bg-slate-100 text-sm px-2 py-1"
            title="Load More"
            onClick={() => dispatch(updateSkip())}
          />
        )}
      </div>
    </>
  );
};

export default ProductsGrid;
