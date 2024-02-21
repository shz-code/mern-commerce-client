import { Minus, Plus, X } from "lucide-react";
import { Link } from "react-router-dom";
import {
  useRemoveCartMutation,
  useUpdateCartMutation,
} from "../../features/cart/cartApi";
import Loader from "../ui/Loader";

const DesktopCartItem = ({ product }) => {
  const { name, price, product: product_id, quantity } = product;

  const [updateCart, { isLoading }] = useUpdateCartMutation();
  const [removeCart, { isLoading: isRemoving }] = useRemoveCartMutation();

  const handleRemove = async (type) => {
    await removeCart({
      product: product_id,
      price: price,
      type: type,
    });
  };

  const handleAdd = async () => {
    await updateCart({
      product: product_id,
      price: price,
      name: name,
    });
  };

  return (
    <tr>
      <td className="w-10">
        {isLoading || isRemoving ? (
          <Loader />
        ) : (
          <span
            className="p-1 rounded-full bg-slate-800 inline-block text-white cursor-pointer"
            onClick={() => handleRemove("all")}
          >
            <X size={12} />
          </span>
        )}
      </td>
      <td className="h-28 w-28">
        <Link to={`/product/${product_id}`}>
          <img
            src={`${import.meta.env.VITE_API_URL}/product/photo/${product_id}`}
            alt={name}
          />
        </Link>
      </td>
      <td>
        <Link to={`/product/${product_id}`}>{name}</Link>
      </td>
      <td>{price}৳</td>
      <td>
        <div className="flex justify-center items-center gap-2">
          {isLoading || isRemoving ? (
            <Loader />
          ) : (
            <span
              className="p-1 rounded-full bg-slate-800 inline-block text-white cursor-pointer"
              onClick={() => handleRemove("single")}
            >
              <Minus size={12} />
            </span>
          )}
          <span className="text-xl border-2 px-2 rounded">{quantity}</span>
          {isLoading || isRemoving ? (
            <Loader />
          ) : (
            <span
              className="p-1 rounded-full bg-slate-800 inline-block text-white cursor-pointer"
              onClick={handleAdd}
            >
              <Plus size={12} />
            </span>
          )}
        </div>
      </td>
      <td>
        <span className="text-xl text-slate-800 font-extrabold">
          {price * quantity}৳
        </span>
      </td>
    </tr>
  );
};

export default DesktopCartItem;
