import { Toaster } from "react-hot-toast";
import Footer from "./Footer";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
