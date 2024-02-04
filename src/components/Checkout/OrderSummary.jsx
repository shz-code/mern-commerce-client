import { TicketCheck } from "lucide-react";
import Button from "../ui/Button";
import Input from "../ui/Input";

const OrderSummary = () => {
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
        <div className="flex items-center justify-between border-b px-4 py-4">
          <div className="w-16">
            <img
              src="https://erabanbd.com/wp-content/uploads/2024/01/qcy-watch-gt.png"
              alt=""
            />
          </div>
          <span>QCY Watch</span>
          <span>x 1</span>
          <span>120৳</span>
        </div>
        {/* Subtotal */}
        <div className="flex justify-between border-b p-4">
          <p>Subtotal</p>
          <p>120৳</p>
        </div>
        {/* Shipping */}
        <div className="flex justify-between border-b p-4">
          <p>Shipping</p>
          <p>100৳</p>
        </div>
        {/* Total */}
        <div className="flex justify-between border-b p-4 font-semibold">
          <p className="text-xl">Total</p>
          <p className="text-2xl font-extrabold">220৳</p>
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
