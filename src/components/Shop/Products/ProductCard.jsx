import { Link } from "react-router-dom";
import Button from "../../ui/Button";

export const ProductCard = ({ product }) => {
  const { _id, name, price, description, quantity, category } = product;
  return (
    <div className="listRoomCard grid gap-2 bg-slate-100 p-2 rounded-md mb-4 relative break-inside-avoid">
      <Link to={`/product/${_id}`} className="h-50">
        <img
          src={`${import.meta.env.VITE_API_URL}/product/photo/${_id}`}
          alt={name}
        />
      </Link>
      {/* Card Details */}
      <div className="listRoomCard-details">
        <h5 className="font-semibold text-lg">
          <Link to={`/product/${_id}`}>
            {name.length > 25 ? <span>{name.substring(0, 25)}...</span> : name}
          </Link>
        </h5>
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
          {quantity > 0 ? (
            <Button title="Add to cart" />
          ) : (
            <Link to={`/room/${_id}`}>
              <Button title="Book Today" />
            </Link>
          )}
          <div className="flex gap-1 justify-center sm:justify-end mt-2 sm:mt-0">
            <span className="font-bold">{quantity} Sold</span>
          </div>
        </div>
      </div>
    </div>
  );
};
