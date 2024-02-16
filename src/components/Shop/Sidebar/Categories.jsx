import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../../../features/categories/categoriesApi";
import {
  addCategories,
  removeCategories,
} from "../../../features/filter/filterSlice";
import CheckBox from "../../ui/CheckBox";
import Error from "../../ui/Error";
import Loader from "../../ui/Loader";

const Category = ({ category }) => {
  // console.log(category);
  const [selected, setSelected] = useState(false);

  const dispatch = useDispatch();
  const { categories: stateCategories } = useSelector((state) => state.filter);

  // console.log(stateCategories);
  const handleChange = () => {
    if (selected) {
      setSelected(false);
      dispatch(removeCategories(category._id));
    } else {
      dispatch(addCategories(category._id));
      setSelected(true);
    }
  };

  useEffect(() => {
    if (stateCategories.includes(category._id)) {
      setSelected(true);
    } else setSelected(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateCategories.length]);

  // console.log(stateCategories);

  return (
    <CheckBox
      id={category.name}
      label={category.name}
      selected={selected}
      onClick={handleChange}
    />
  );
};

const Categories = () => {
  const { data, isLoading, isError, error } = useGetCategoriesQuery();

  let content = null;
  if (isLoading) content = <Loader />;
  else if (!isLoading && isError) content = <Error message={error.status} />;
  else if (!isLoading && !isError && !data.length)
    content = <Error message="Nothing Found" />;
  else if (!isLoading && !isError && data.length)
    content = data.map((item) => <Category key={item._id} category={item} />);

  return <div className="space-y-2 mt-2">{content}</div>;
};

export default Categories;
