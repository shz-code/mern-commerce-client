import { TicketCheck } from "lucide-react";
import { useGetCartQuery } from "../../features/cart/cartApi";
import Button from "../ui/Button";
import Error from "../ui/Error";
import Input from "../ui/Input";
import Loader from "../ui/Loader";
import OrderItemCard from "./OrderItemCard";

const OrderSummary = () => {
  const { data, isError, isLoading, error } = useGetCartQuery();

  let content = null;
  if (isLoading) content = <Loader />;
  else if (!isLoading && isError) content = <Error message={error.data} />;
  else if (!isLoading && !isError && !data.price)
    content = <Error message="Nothing in Cart" />;
  else if (!isLoading && !isError && data.price)
    content = data.products.map((item) => (
      <OrderItemCard key={item._id} product={item} />
    ));

  return (
    <div className="sticky top-2">
      <h4 className="font-semibold text-lg hidden md:block">Your Order</h4>
      <div className="border rounded shadow mt-4">
        {/* Header */}
        <div className="flex justify-between border-b p-4 font-semibold">
          <p>Product</p>
          <p>Subtotal</p>
        </div>
        {/* Items Container */}
        <div>{content}</div>
        {/* Subtotal */}
        <div className="flex justify-between border-b p-4">
          <p>Subtotal</p>
          <p>{data?.price}৳</p>
        </div>
        {/* Shipping */}
        <div className="flex justify-between border-b p-4">
          <p>Shipping</p>
          <p>120৳ (Standard)</p>
        </div>
        {/* Total */}
        <div className="flex justify-between border-b p-4 font-semibold">
          <p className="text-xl">Total</p>
          <p className="text-2xl font-extrabold">
            {data?.price ? data.price + 120 : 0}৳
          </p>
        </div>
      </div>
      {/* Coupon */}
      <form action="" className="mt-4" onSubmit={() => alert("Hello")}>
        <Input
          className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
          icon={<TicketCheck size={15} />}
          placeholder="Have a coupon?"
        />
        <div className="mt-2">
          <Button className="w-full" title="Validate" />
        </div>
      </form>
    </div>
  );
};

export default OrderSummary;
