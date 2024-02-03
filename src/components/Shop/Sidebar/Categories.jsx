import { useState } from "react";
import CheckBox from "../../ui/CheckBox";

const Category = ({ category }) => {
  const [selected, setSelected] = useState(false);

  const handleChange = () => {
    if (selected) {
      setSelected(false);
    } else {
      setSelected(true);
    }
  };

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
  const categories = [
    {
      name: "Rat",
      _id: 1,
    },
    {
      name: "bat",
      _id: 2,
    },
  ];
  return (
    <div className="space-y-2 mt-2">
      {categories.map((item) => (
        <Category key={item._id} category={item} />
      ))}
    </div>
  );
};

export default Categories;
