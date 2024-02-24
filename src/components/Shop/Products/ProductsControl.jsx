import { useDispatch } from "react-redux";
import {
  setQuery,
  updateOrdering,
  updateSort,
} from "../../../features/filter/filterSlice";
import Select from "../../ui/Select";

const ProductsControl = () => {
  const dispatch = useDispatch();
  const ordering = [
    {
      value: "default",
      label: "Default",
    },
    {
      value: "asc",
      label: "Low to High",
    },
    {
      value: "desc",
      label: "High to Low",
    },
  ];
  const sortBy = [
    {
      value: "default",
      label: "Default",
    },
    {
      value: "price",
      label: "Price",
    },
    {
      value: "sold",
      label: "Sold",
    },
    {
      value: "review",
      label: "Review",
    },
  ];
  return (
    <div className="flex justify-end gap-4">
      <Select
        label="Ordering"
        selectItem={ordering}
        handleChange={(e) => dispatch(updateOrdering(e.target.value))}
      />
      <Select
        label="Sort By"
        selectItem={sortBy}
        handleChange={(e) => dispatch(updateSort(e.target.value))}
      />
      <span
        className="text-xs flex justify-end mt-2 cursor-pointer underline font-semibold"
        onClick={() => dispatch(setQuery())}
      >
        Filter
      </span>
    </div>
  );
};

export default ProductsControl;
