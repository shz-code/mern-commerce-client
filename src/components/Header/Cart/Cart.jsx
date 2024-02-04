import { User2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";

const Cart = ({ setCartOpen, cartOpen }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("cartOpen")) setCartOpen(false);
  };
  return (
    <div
      className={`bg-slate-200/10 backdrop-blur fixed top-0 right-0 h-full w-full transition-all z-10 ${
        cartOpen ? "translate-x-0" : "translate-x-full"
      }`}
      onClick={(e) => handleClick(e)}
    >
      <div className="flex justify-end h-full cartOpen">
        <div className="bg-gradient-to-tr from-slate-800/80 to-slate-950/30 backdrop-blur-md min-h-screen max-w-[300px] w-full px-4 shadow-md flex flex-col justify-between">
          <div className="mt-2">
            <p className="text-4xl font-extrabold text-white">Cart</p>
            <div className="cartItems mt-4">
              <div className="bg-slate-100 rounded px-2 py-4 flex gap-4 items-center">
                <span>
                  <User2Icon />
                </span>
                <div className="w-full">
                  <p>Name</p>
                  <div className="flex justify-between">
                    <span>Quantity</span>
                    <span>x1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4 space-y-2">
            <Button
              className="w-full bg-slate-100 text-black hover:bg-slate-200"
              title={<Link to="/cart">Go to cart</Link>}
              onClick={() => setCartOpen(false)}
            />
            <Button className="w-full" title="Go to checkout" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
