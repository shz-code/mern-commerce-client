import { ArrowDown, ArrowUp } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addMaxPrice, addMinPrice } from "../../../features/filter/filterSlice";
import Input from "../../ui/Input";

const PriceFilters = ({ showPricesFilter, setShowPricesFilter }) => {
  const dispatch = useDispatch();

  const { priceRange } = useSelector((state) => state.filter);

  return (
    <>
      <div
        className="flex justify-between items-center border-b-2 pb-2 cursor-pointer"
        onClick={() => setShowPricesFilter((prev) => !prev)}
      >
        <p className="font-semibold">Price</p>
        <span className="mt-1">
          {showPricesFilter ? <ArrowUp size={15} /> : <ArrowDown size={15} />}
        </span>
      </div>
      <div>
        <div className="flex justify-between mt-2 gap-2">
          {showPricesFilter && (
            <>
              <Input
                className="text-black focus:ring-slate-600 shadow-none"
                placeholder="From"
                value={priceRange[0]}
                onChange={(e) => {
                  dispatch(addMinPrice(Number(e.target.value)));
                }}
              />
              <Input
                className="text-black focus:ring-slate-600 shadow-none"
                placeholder="To"
                value={priceRange[1]}
                onChange={(e) => {
                  dispatch(addMaxPrice(Number(e.target.value)));
                }}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PriceFilters;
