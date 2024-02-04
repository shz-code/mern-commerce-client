import { useState } from "react";
import Cart from "./Cart/Cart";
import { MobileNavbar } from "./MobileNavbar";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <div>
      <TopBar />
      <Navbar
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
        setCartOpen={setCartOpen}
      />
      <MobileNavbar
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />
      <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
    </div>
  );
};

export default Header;
