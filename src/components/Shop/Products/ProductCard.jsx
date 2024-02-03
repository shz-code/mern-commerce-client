import Button from "../../ui/Button";

export const ProductCard = ({ product }) => {
  const { _id, name, price, description, quantity, category } = product;
  return (
    <div className="bg-white rounded-sm p-4">
      <div className="relative">
        <img
          src={`${import.meta.env.VITE_API_URL}/product/photo/${_id}`}
          alt={name}
        />
        <span className="absolute top-1 right-1 bg-slate-800/80 text-white font-semibold backdrop-blur px-2 py-1 rounded-full cursor-pointer">
          {category.name}
        </span>
      </div>
      <div className="mt-2 border-t pt-2">
        <h4 className="text-xl font-semibold">{name}</h4>
        <p className="flex items-center gap-1">
          <span className="text-2xl font-bold text-blue-700">{price}</span> TK
        </p>
      </div>
      <div className="mt-2">
        {quantity > 0 && <Button title="Add to cart" />}
      </div>
    </div>
  );
};
