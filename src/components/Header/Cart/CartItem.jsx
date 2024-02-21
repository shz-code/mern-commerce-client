import { Link } from "react-router-dom";

const CartItem = ({ product }) => {
  const { name, price, product: _id, quantity } = product;
  return (
    <div className="bg-slate-100 rounded grid gap-4 items-center">
      <div className="w-full p-4 border-b">
        <p className="text-xl font-semibold tracking-tighter">{name}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs">Quantity</span>
          <span className="text-lg font-semibold">x{quantity}</span>
        </div>
      </div>
      <div className="px-4 pb-4 flex justify-between items-center">
        <Link to={`/product/`} className="h-20 w-20">
          <img
            src={`${import.meta.env.VITE_API_URL}/product/photo/${_id}`}
            alt={name}
          />
        </Link>
        <div className="gap-2 text-xs w-1/2">
          <p className="border-b pb-2 text-end">
            Unit Price: <span className="text-sm font-bold">{price}৳</span>
          </p>
          <p className="w-full pt-2 text-end">
            Total Price:{" "}
            <span className="text-sm font-bold">{price * quantity}৳</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
