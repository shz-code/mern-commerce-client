import { MobileNavbar } from "./MobileNavbar";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

const Header = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <MobileNavbar />
    </div>
  );
};

export default Header;
