import { Search } from "lucide-react";
import { useState } from "react";
import Input from "../../ui/Input";
import CategoryFilter from "./CategoryFilter";
import PriceFilters from "./PriceFilters";

const Sidebar = () => {
  const [showCategories, setShowCategories] = useState(true);
  const [showPricesFilter, setShowPricesFilter] = useState(true);

  return (
    <>
      <div className="filterHeader flex justify-between items-center">
        <p className="font-semibold">Filters</p>
        <span className="text-slate-500 text-xs cursor-pointer">Clear all</span>
      </div>
      <div className="filterInput py-2">
        <Input
          className="text-black focus:ring-slate-600 shadow-none"
          placeholder="Search Products ... "
          clickAble
          icon={<Search size={15} />}
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
    </>
  );
};

export default Sidebar;
