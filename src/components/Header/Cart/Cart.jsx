import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleCartSlideOpen } from "../../../features/utility/utilitySlice";
import Button from "../../ui/Button";
import CartItemList from "./CartItemList";

const Cart = () => {
  const { _id } = useSelector((state) => state.user);
  const { cartSlideOpen } = useSelector((state) => state.utility);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    if (e.target.classList.contains("cartOpen"))
      dispatch(toggleCartSlideOpen());
  };
  return (
    <div
      className={`bg-slate-200/10 backdrop-blur fixed top-0 right-0 h-full w-full transition-all z-10 ${
        cartSlideOpen ? "translate-x-0" : "translate-x-full"
      }`}
      onClick={(e) => handleClick(e)}
    >
      <div className="flex justify-end h-full cartOpen">
        <div className="bg-gradient-to-tr from-slate-800/80 to-slate-950/30 backdrop-blur-md min-h-screen max-w-[300px] w-full px-4 shadow-md flex flex-col justify-between cartSlider overflow-y-scroll">
          <div className="mt-2">
            <p className="text-4xl font-extrabold text-white">Cart</p>
            <CartItemList />
          </div>
          <div className="my-4">
            {_id ? (
              <>
                <Link to="/cart">
                  <Button
                    title="Go to cart"
                    onClick={() => dispatch(toggleCartSlideOpen())}
                    className="w-full bg-slate-100 text-black hover:bg-slate-200"
                  />
                </Link>
                <Link to="checkout">
                  <Button
                    className="w-full mt-2"
                    title="Go to checkout"
                    onClick={() => dispatch(toggleCartSlideOpen())}
                  />
                </Link>
              </>
            ) : (
              <Link to="/login">
                <Button
                  title="Login to view cart"
                  onClick={() => dispatch(toggleCartSlideOpen())}
                  className="w-full bg-slate-100 text-black hover:bg-slate-200"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
