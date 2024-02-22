import { Banknote } from "lucide-react";
import { useState } from "react";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";

const Checkout = () => {
  const [coupon, setCoupon] = useState({ status: false, data: {} });

  return (
    <div className="container mx-auto px-2 py-8">
      <div className="border-t-4 border-slate-950 rounded bg-white px-4 md:px-8">
        <div className="checkoutHeader flex items-center justify-between py-8 border-b-4">
          <div className="space-y-4 w-full">
            <h3 className="font-bold text-3xl">Complete your order</h3>
            <p className="max-w-[450px] text-sm">
              Enjoy seamless shopping and satisfaction guaranteed! Thank you for
              choosing us!
            </p>
          </div>
          <div className="w-2/4">
            <p className="flex gap-4 items-center">
              <span>
                <Banknote />
              </span>
              Secure Payment
            </p>
          </div>
        </div>
        <div className="checkoutBody py-8 flex flex-col-reverse md:flex-row gap-4">
          {/* Form */}
          <CheckoutForm />
          <div className="orderSummary md:w-3/4 mb-4 md:mb-0">
            <OrderSummary coupon={coupon} setCoupon={setCoupon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
