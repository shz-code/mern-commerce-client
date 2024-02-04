import { Minus, Plus, X } from "lucide-react";
import { Link } from "react-router-dom";

const MobileCartContainer = () => {
  return (
    <div className="mobileCartContainer">
      <div className="bg-white px-2 p-4 rounded shadow">
        <div className="flex gap-4">
          <div className="productImage max-w-[150px] w-full border-2 rounded">
            <Link to={`/product/`}>
              <img src="https://erabanbd.com/wp-content/uploads/2024/01/qcy-watch-gt.png" />
            </Link>
          </div>
          <div className="productDetails w-full text-xs font-semibold">
            <div className="flex justify-between items-center border-b pb-4">
              <h4>
                <Link to={`/product/`}>Glimmer Lamps</Link>
              </h4>
              <span className="p-1 rounded-full bg-slate-800 inline-block text-white cursor-pointer">
                <X size={12} />
              </span>
            </div>
            <p>
              ID <span>Lorem ipsum...</span>
            </p>
            <p>
              Price(Taka) <span>120৳</span>
            </p>
            <p>
              Quantity
              <div className="flex justify-between items-center gap-2">
                <span className="p-1 rounded-full bg-slate-800 inline-block text-white">
                  <Minus size={12} />
                </span>
                <span className="text-xl border-2 px-2 rounded">1</span>
                <span className="p-1 rounded-full bg-slate-800 inline-block text-white cursor-pointer">
                  <Plus size={12} />
                </span>
              </div>
            </p>
            <p>
              Subtotal(Taka){" "}
              <span className="text-xl text-slate-800 font-extrabold">
                120৳
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white px-2 p-4 rounded shadow">
        <div className="flex gap-4">
          <div className="productImage max-w-[150px] w-full border-2 rounded">
            <Link to={`/product/`}>
              <img src="https://erabanbd.com/wp-content/uploads/2024/01/qcy-watch-gt.png" />
            </Link>
          </div>
          <div className="productDetails w-full text-xs font-semibold">
            <div className="flex justify-between items-center border-b pb-4">
              <h4>
                <Link to={`/product/`}>Glimmer Lamps</Link>
              </h4>
              <span className="p-1 rounded-full bg-slate-800 inline-block text-white cursor-pointer">
                <X size={12} />
              </span>
            </div>
            <p>
              ID <span>Lorem ipsum...</span>
            </p>
            <p>
              Price(Taka) <span>120৳</span>
            </p>
            <p>
              Quantity
              <div className="flex justify-between items-center gap-2">
                <span className="p-1 rounded-full bg-slate-800 inline-block text-white">
                  <Minus size={12} />
                </span>
                <span className="text-xl border-2 px-2 rounded">1</span>
                <span className="p-1 rounded-full bg-slate-800 inline-block text-white cursor-pointer">
                  <Plus size={12} />
                </span>
              </div>
            </p>
            <p>
              Subtotal(Taka){" "}
              <span className="text-xl text-slate-800 font-extrabold">
                120৳
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCartContainer;
