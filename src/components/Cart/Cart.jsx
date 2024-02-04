import CartSummary from "./CartSummary";
import DesktopCartContainer from "./DesktopCartContainer";
import MobileCartContainer from "./MobileCartContainer";

const Cart = () => {
  return (
    <div className="container mx-auto px-2 py-8">
      <div className="lg:flex gap-4 space-y-6 lg:space-y-0">
        <DesktopCartContainer />
        <MobileCartContainer />
        <div className="cartSummary w-full lg:w-2/4">
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default Cart;
