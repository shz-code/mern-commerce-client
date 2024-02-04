import { Menu, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
const Navbar = ({ mobileNavOpen, setMobileNavOpen, setCartOpen }) => {
  const handleMobileNavigation = () => {
    if (mobileNavOpen) setMobileNavOpen(false);
    else setMobileNavOpen(true);
  };
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
                  <User size={20} />
                </Link>
                {/* <div className="dashboardModal">Dashboard</div> */}
              </div>
              <span
                className="cursor-pointer"
                onClick={() => {
                  setCartOpen(true);
                }}
              >
                <ShoppingCart size={20} />
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
