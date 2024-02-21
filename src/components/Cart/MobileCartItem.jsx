import { Minus, Plus, X } from "lucide-react";
import { Link } from "react-router-dom";

const MobileCartItem = ({ product }) => {
  const { name, price, product: product_id, quantity } = product;
  return (
    <div className="bg-white px-2 p-4 rounded shadow">
      <div className="flex gap-4">
        <div className="productImage max-w-[150px] w-full border-2 rounded">
          <Link to={`/product/${product_id}`}>
            <img
              src={`${
                import.meta.env.VITE_API_URL
              }/product/photo/${product_id}`}
              alt={name}
            />
          </Link>
        </div>
        <div className="productDetails w-full text-xs font-semibold">
          <div className="flex justify-between items-center border-b pb-4">
            <h4 className="font-bold text-lg">
              <Link to={`/product/${product_id}`}>{name}</Link>
            </h4>
            <span className="p-1 rounded-full bg-slate-800 inline-block text-white cursor-pointer">
              <X size={12} />
            </span>
          </div>
          <p>
            Price(Taka) <span>{price}৳</span>
          </p>
          <div className="flex justify-between items-center mt-2">
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
          </div>
          <p>
            Subtotal(Taka){" "}
            <span className="text-xl text-slate-800 font-extrabold">
              {price * quantity}৳
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileCartItem;
