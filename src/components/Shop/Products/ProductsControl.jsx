import { useDispatch } from "react-redux";
import { updateSort } from "../../../features/filter/filterSlice";
import Select from "../../ui/Select";

const ProductsControl = () => {
  const dispatch = useDispatch();
  const selectItem = [
    {
      value: "default",
      label: "Default",
    },
    {
      value: "top_sell",
      label: "Best Selling",
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
  return (
    <div className="flex justify-end">
      <Select
        selectItem={selectItem}
        handleChange={(e) => dispatch(updateSort(e.target.value))}
      />
    </div>
  );
};

export default ProductsControl;
