import { useGetCategoriesQuery } from "../../../features/categories/categoriesApi";
import Error from "../../ui/Error";
import Loader from "../../ui/Loader";
import CategoryPill from "./CategoryPill";

const AllCategories = () => {
  const { data, isLoading, isError, error } = useGetCategoriesQuery();

  console.log(error);
  let content = null;
  if (isLoading) content = <Loader />;
  else if (!isLoading && isError) content = <Error message={error.status} />;
  else if (!isLoading && !isError && !data.length)
    content = <Error message="Nothing Found" />;
  else if (!isLoading && !isError && data.length)
    content = data.map((item) => (
      <CategoryPill key={item._id} category={item} />
    ));

  return <div className="flex flex-wrap gap-2">{content}</div>;
};

export default AllCategories;
