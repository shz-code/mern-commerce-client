import { Link } from "react-router-dom";
import Button from "../ui/Button";
import DesktopCartContainer from "./DesktopCartContainer";
import MobileCartContainer from "./MobileCartContainer";

const Cart = () => {
  return (
    <div className="container mx-auto px-2 py-8">
      <div className="lg:flex gap-4 space-y-6 lg:space-y-0">
        <DesktopCartContainer />
        <MobileCartContainer />
        <div className="cartSummary w-full lg:w-2/4">
          {/* Cart Summary */}
          <div className="bg-white shadow rounded">
            <h3 className="text-2xl font-semibold border-b-4 py-4 px-4">
              Cart Totals
            </h3>
            <div className="border-b py-4">
              <div className="flex justify-between items-center px-4 text-xs">
                <p>Shipping</p>
                <div className="flex flex-col items-end gap-2">
                  <span>Standard shipping</span>
                  Shipping to ....
                  <span className="underline cursor-pointer">
                    <Link to="/dashboard">Change address</Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center px-4 py-4 text-xs">
              <p className="text-xl font-semibold">Total</p>
              <div className="flex flex-col items-end gap-2">
                <span className="text-slate-800 text-2xl font-extrabold">
                  120৳
                </span>
              </div>
            </div>
            <div className="px-4 pb-4">
              <Button
                className="w-full"
                title={<Link to={"checkout"}>Proceed to checkout</Link>}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
