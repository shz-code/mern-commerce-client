import { useState } from "react";
import Cart from "./Cart/Cart";
import { MobileNavbar } from "./MobileNavbar";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <div>
      <TopBar />
      <Navbar
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />
      <MobileNavbar
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />
      <Cart />
    </div>
  );
};

export default Header;
