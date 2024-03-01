import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  reset,
  setQuery,
  updateSearch,
} from "../../../features/filter/filterSlice";
import Input from "../../ui/Input";
import CategoryFilter from "./CategoryFilter";
import PriceFilters from "./PriceFilters";

const Sidebar = () => {
  const [showCategories, setShowCategories] = useState(true);
  const [showPricesFilter, setShowPricesFilter] = useState(true);

  const { search } = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateSearch(e.target.value));
  };

  return (
    <>
      <div className="filterHeader flex justify-between items-center">
        <p className="font-semibold">Filters</p>
        <span
          className="text-slate-500 text-xs cursor-pointer"
          onClick={() => dispatch(reset())}
        >
          Clear all
        </span>
      </div>
      <div className="filterInput py-2">
        <Input
          className="text-black focus:ring-slate-600 shadow-none"
          placeholder="Search Products ... "
          value={search}
          onChange={handleChange}
        />
      </div>
      {/* Category Filters */}
      <div className="categoryFilters">
        <CategoryFilter
          showCategories={showCategories}
          setShowCategories={setShowCategories}
        />
      </div>
      {/* Price Filters */}
      <div className="priceFilters mt-2">
        <PriceFilters
          showPricesFilter={showPricesFilter}
          setShowPricesFilter={setShowPricesFilter}
        />
      </div>
      <span
        className="text-xs flex justify-end mt-2 cursor-pointer underline font-semibold"
        onClick={() => dispatch(setQuery())}
      >
        Filter
      </span>
    </>
  );
};

export default Sidebar;
