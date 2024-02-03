import { ArrowDown, ArrowUp } from "lucide-react";
import Categories from "./Categories";

const CategoryFilter = ({ showCategories, setShowCategories }) => {
  return (
    <>
      <div
        className="flex justify-between items-center border-b-2 pb-2 cursor-pointer"
        onClick={() => setShowCategories((prev) => !prev)}
      >
        <p className="font-semibold">Category</p>
        <span className="mt-1">
          {showCategories ? <ArrowUp size={15} /> : <ArrowDown size={15} />}
        </span>
      </div>
      <div>{showCategories && <Categories />}</div>
    </>
  );
};

export default CategoryFilter;
