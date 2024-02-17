import { useDispatch } from "react-redux";
import { updateSkip } from "../../../features/filter/filterSlice";
import { useGetProductsQuery } from "../../../features/products/productsApi";
import Button from "../../ui/Button";
import Error from "../../ui/Error";
import Loader from "../../ui/Loader";
import { ProductCard } from "./ProductCard";

const ProductsGrid = ({ query, lodeMoreHidden }) => {
  const { data, isLoading, isError, error } = useGetProductsQuery(query, {
    refetchOnMountOrArgChange: true,
  });

  const dispatch = useDispatch();

  let content = null;
  if (isLoading) content = <Loader />;
  else if (!isLoading && isError) content = <Error message={error.data} />;
  else if (!isLoading && !isError && !data.length)
    content = <Error message="Nothing Found" />;
  else if (!isLoading && !isError && data.length)
    content = data.map((item) => <ProductCard key={item._id} product={item} />);

  return (
    <>
      <div className="columns-2 sm:columns-1 md:columns-2 xl:columns-3 gap-4">
        {content}
      </div>
      <div className="flex justify-center mt-4">
        {!isError && !isLoading && data.length && !lodeMoreHidden && (
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
