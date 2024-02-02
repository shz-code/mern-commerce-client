import { Toaster } from "react-hot-toast";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
