import { Menu, User } from "lucide-react";
import NavLinks from "./NavLinks";
const Navbar = ({ mobileNavOpen, setMobileNavOpen }) => {
  const handleMobileNavigation = () => {
    if (mobileNavOpen) setMobileNavOpen(false);
    else setMobileNavOpen(true);
  };
  return (
    <div className="bg-slate-50">
      <div className="container mx-auto px-2">
        <div className="flex justify-between items-center">
          <div className="w-12">
            <p className="text-4xl font-extrabold">MERN</p>
          </div>
          <nav className="flex justify-between gap-4 py-2 sm:py-0">
            <ul className="gap-4 items-center hidden sm:flex">
              <NavLinks />
            </ul>
            <div className="navActions flex items-center gap-2">
              <div className="p-2 rounded-full bg-slate-200">
                <User size={20} />
              </div>
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
