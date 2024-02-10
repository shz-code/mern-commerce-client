import { Search, X } from "lucide-react";
import { useState } from "react";
import Input from "../ui/Input";
import MobileNavLinks from "./MobileNavLinks";

export const MobileNavbar = ({ setMobileNavOpen, mobileNavOpen }) => {
  const [showLinks, setShowLinks] = useState("menu");

  const handleClick = (e) => {
    if (e.target.classList.contains("mobileNavFixed")) setMobileNavOpen(false);
  };
  const toggleClose = () => {
    setMobileNavOpen(false);
  };

  return (
    <div
      className={`bg-slate-200/10 backdrop-blur fixed top-0 left-0 h-full w-full transition-all z-10 ${
        mobileNavOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      onClick={(e) => handleClick(e)}
    >
      <div className="flex justify-start h-full mobileNavFixed">
        <div className="bg-gradient-to-tr from-slate-800/80 to-slate-950/30 backdrop-blur-md h-full w-80 px-4 shadow-md mobileNavSlider overflow-y-scroll">
          <div className="flex justify-between items-center mt-2">
            <p className="text-4xl font-extrabold text-white">MERN</p>
            <span
              className="p-2 bg-slate-800/80 backdrop-blur-md rounded-full cursor-pointer"
              onClick={toggleClose}
            >
              <X className="text-white" size={15} />
            </span>
          </div>
          <div className="mobileHeaderSearch my-2">
            <Input
              icon={<Search size={15} />}
              clickAble
              action={() => console.log("Hello")}
              placeholder="Search for products"
            />
          </div>
          <div className="mobileNavigationBar">
            <div
              className={`${showLinks === "menu" && "active"}`}
              onClick={() => setShowLinks("menu")}
            >
              Menu
            </div>
            <div
              className={`${showLinks === "categories" && "active"}`}
              onClick={() => setShowLinks("categories")}
            >
              Categories
            </div>
          </div>
          <div className="navLinks">
            <MobileNavLinks showLinks={showLinks} />
          </div>
        </div>
      </div>
    </div>
  );
};
