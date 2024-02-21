import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetProfileQuery } from "../../features/profile/profileApi";
import Button from "../ui/Button";
import Loader from "../ui/Loader";

const CartSummary = ({ total }) => {
  const { _id } = useSelector((state) => state.user);

  const { data, isLoading, isError } = useGetProfileQuery(_id);

  let content = null;
  if (isLoading) content = <Loader />;
  else if (!isLoading && !isError)
    content = (
      <>
        <span>Standard shipping</span>
        {data.city === "none" ? (
          "Not Selected"
        ) : (
          <span>Shipping to {data.city}</span>
        )}
        <span className="underline cursor-pointer">
          <Link to="/dashboard">Change address</Link>
        </span>
      </>
    );

  return (
    <>
      {/* Cart Summary */}
      <div className="bg-white shadow rounded">
        <h3 className="text-2xl font-semibold border-b-4 py-4 px-4">
          Cart Totals
        </h3>
        <div className="border-b py-4">
          <div className="flex justify-between items-center px-4 text-xs">
            <p>Shipping</p>
            <div className="flex flex-col items-end gap-2">{content}</div>
          </div>
        </div>
        <div className="flex justify-between items-center px-4 py-4 text-xs">
          <p className="text-xl font-semibold">Total</p>
          <div className="flex flex-col items-end gap-2">
            <span className="text-slate-800 text-2xl font-extrabold">
              {total}৳
            </span>
          </div>
        </div>
        <div className="px-4 pb-4">
          <Link to="/checkout">
            <Button className="w-full" title="Proceed to checkout" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartSummary;
