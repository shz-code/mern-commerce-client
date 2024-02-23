import { Tag } from "lucide-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useUpdateCartMutation } from "../../../features/cart/cartApi";
import { toggleCartSlideOpen } from "../../../features/utility/utilitySlice";
import Button from "../../ui/Button";

export const ProductCard = ({ product }) => {
  const { _id, name, price, description, quantity, category, sold } = product;

  const [updateCart, { isLoading }] = useUpdateCartMutation();

  const dispatch = useDispatch();

  const handleClick = async () => {
    await updateCart({
      product: _id,
      price: price,
      name: name,
    });
    dispatch(toggleCartSlideOpen());
  };

  return (
    <div className="listRoomCard grid gap-2 bg-slate-100 p-2 rounded-md mb-4 relative break-inside-avoid">
      <Link to={`/product/${_id}`} className="h-52">
        <img
          src={`${import.meta.env.VITE_API_URL}/product/photo/${_id}`}
          alt={name}
        />
      </Link>
      {/* Card Details */}
      <div className="listRoomCard-details">
        <div className="flex justify-between">
          <h5 className="font-semibold text-lg">
            <Link to={`/product/${_id}`}>
              {name.length > 25 ? (
                <span>{name.substring(0, 25)}...</span>
              ) : (
                name
              )}
            </Link>
          </h5>
          <span className="w-fit rounded-full flex gap-2 items-center text-sm font-semibold text-slate-500">
            <Tag size={12} />
            {category.name}
          </span>
        </div>
        {/* Card Body */}
        <div className="card-body grid gap-1 mt-2">
          <p>
            {description.length > 60 ? (
              <span>{description.substring(0, 60)}...</span>
            ) : (
              <span>{description}</span>
            )}
          </p>
          <div className="flex flex-wrap gap-2 py-2"></div>
          {/* Price */}
          <div className="flex gap-2 items-center">
            <span className="text-2xl font-bold text-slate-800">{price}</span>{" "}
            BDT
          </div>
        </div>
        {/* Card Footer */}
        <div className="card-footer sm:flex justify-between items-center border-t mt-4 pt-2">
          {quantity - sold > 0 ? (
            <Button
              title="Add to cart"
              onClick={handleClick}
              disabled={isLoading}
              loading={isLoading}
            />
          ) : (
            <Button
              title="Not in stock"
              className="disabled:bg-red-800"
              disabled
            />
          )}
          <div className="flex gap-1 justify-center sm:justify-end mt-2 sm:mt-0">
            <span className="font-bold">{sold} Sold</span>
          </div>
        </div>
      </div>
    </div>
  );
};
