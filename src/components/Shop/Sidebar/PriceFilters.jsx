import { ArrowDown, ArrowUp } from "lucide-react";
import Input from "../../ui/Input";

const PriceFilters = ({ showPricesFilter, setShowPricesFilter }) => {
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
              />
              <Input
                className="text-black focus:ring-slate-600 shadow-none"
                placeholder="To"
              />
            </>
          )}
        </div>
        {showPricesFilter && (
          <span className="text-xs flex justify-end mt-2 cursor-pointer underline font-semibold">
            Filter
          </span>
        )}
      </div>
    </>
  );
};

export default PriceFilters;
