import { useGetCartQuery } from "../../../features/cart/cartApi";
import Error from "../../ui/Error";
import Loader from "../../ui/Loader";
import CartItem from "./CartItem";

const CartItemList = () => {
  const { data, isError, isLoading, error } = useGetCartQuery();

  let content = null;
  if (isLoading) content = <Loader />;
  else if (!isLoading && isError) content = <Error message={error.data} />;
  else if (!isLoading && !isError && !data.price)
    content = <Error message="Nothing in Cart" />;
  else if (!isLoading && !isError && data.price)
    content = (
      <>
        {data.products.map((item, index) => (
          <CartItem key={index} product={item} />
        ))}
        <div className="bg-slate-100 rounded grid gap-4 items-center">
          <div className="w-full p-4">
            <div className="flex justify-between items-center">
              <span className="text-xs">Total</span>
              <span className="text-lg font-semibold">{data.price}৳</span>
            </div>
          </div>
        </div>
      </>
    );

  return <div className="cartItems mt-4 space-y-4">{content}</div>;
};

export default CartItemList;
