import { Link } from "react-router-dom";

const OrderItemCard = ({ product }) => {
  const { name, price, product: product_id, quantity } = product;
  return (
    <div className="flex items-center justify-between border-b px-4 py-4">
      <div className="h-28 w-28">
        <Link to={`/product/${product_id}`}>
          <img
            src={`${import.meta.env.VITE_API_URL}/product/photo/${product_id}`}
            alt={name}
          />
        </Link>
      </div>
      <span>{name}</span>
      <span>x {quantity}</span>
      <span>{price}৳</span>
    </div>
  );
};

export default OrderItemCard;
