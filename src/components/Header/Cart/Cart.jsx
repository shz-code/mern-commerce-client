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
        <div className="bg-gradient-to-tr from-slate-800/80 to-slate-950/30 backdrop-blur-md min-h-screen max-w-[300px] w-full px-4 shadow-md flex flex-col justify-between cartSlider overflow-y-scroll">
          <div className="mt-2">
            <p className="text-4xl font-extrabold text-white">Cart</p>
            <div className="cartItems mt-4">
              <div className="bg-slate-100 rounded grid gap-4 items-center">
                <div className="w-full p-4 border-b">
                  <p className="text-xl font-semibold tracking-tighter">Name</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs">Quantity</span>
                    <span className="text-lg font-semibold">x1</span>
                  </div>
                </div>
                <div className="px-4 pb-4 flex justify-between items-center">
                  <Link to={`/product/`} className="w-16">
                    <img src="https://erabanbd.com/wp-content/uploads/2024/01/qcy-watch-gt.png" />
                  </Link>
                  <div className="gap-2 text-xs w-1/2">
                    <p className="border-b pb-2 text-end">
                      Unit Price:{" "}
                      <span className="text-sm font-bold">200৳</span>
                    </p>
                    <p className="w-full pt-2 text-end">
                      Total Price:{" "}
                      <span className="text-sm font-bold">200৳</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4">
            <Link to="/cart">
              <Button
                title="Go to cart"
                onClick={() => setCartOpen(false)}
                className="w-full bg-slate-100 text-black hover:bg-slate-200"
              />
            </Link>
            <Link to="checkout">
              <Button
                className="w-full mt-2"
                title="Go to checkout"
                onClick={() => setCartOpen(false)}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
