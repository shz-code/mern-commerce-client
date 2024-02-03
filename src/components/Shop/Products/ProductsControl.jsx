import Select from "../../ui/Select";

const ProductsControl = () => {
  const selectItem = [
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
  return (
    <div className="flex justify-end">
      <Select selectItem={selectItem} />
    </div>
  );
};

export default ProductsControl;
