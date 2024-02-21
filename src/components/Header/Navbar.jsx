import { Menu, ShoppingCart, User } from "lucide-react";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetCartQuery } from "../../features/cart/cartApi";
import { toggleCartSlideOpen } from "../../features/utility/utilitySlice";
import NavLinks from "./NavLinks";
const Navbar = ({ mobileNavOpen, setMobileNavOpen }) => {
  const { photo } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { data, isLoading } = useGetCartQuery();

  const handleMobileNavigation = () => {
    if (mobileNavOpen) setMobileNavOpen(false);
    else setMobileNavOpen(true);
  };

  const calcCartItemsCount = useCallback(() => {
    if (!isLoading && data && data.price) {
      return data.products.reduce((a, b) => a + b.quantity, 0);
    }
    return 0;
  }, [isLoading, data]);

  useEffect(() => {
    calcCartItemsCount();
  }, [calcCartItemsCount]);

  return (
    <div className="bg-slate-50">
      <div className="container mx-auto px-2">
        <div className="flex justify-between items-center">
          <div className="w-12">
            <Link to="/">
              <p className="text-4xl font-extrabold">MERN</p>
            </Link>
          </div>
          <nav className="flex justify-between gap-4 py-2 sm:py-0">
            <ul className="gap-4 items-center hidden sm:flex">
              <NavLinks />
            </ul>
            <div className="navActions flex items-center gap-4">
              <div className="relative">
                <Link
                  to="/dashboard"
                  className="inline-block p-2 rounded-full bg-slate-200 cursor-pointe"
                >
                  {photo != undefined && photo != "none" ? (
                    <div className="w-6">
                      <img
                        src={photo}
                        className="rounded-full"
                        alt="Profile Picture"
                      />
                    </div>
                  ) : (
                    <User size={20} />
                  )}
                </Link>
                {/* <div className="dashboardModal">Dashboard</div> */}
              </div>
              <span
                className="cursor-pointer relative"
                onClick={() => {
                  dispatch(toggleCartSlideOpen());
                }}
              >
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 px-1 text-xs text-white rounded-full bg-slate-800">
                  {calcCartItemsCount()}
                </span>
              </span>
              <div
                className="block sm:hidden cursor-pointer"
                onClick={handleMobileNavigation}
              >
                <Menu />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
