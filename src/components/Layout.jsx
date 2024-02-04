import { Toaster } from "react-hot-toast";
import Footer from "./Footer";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
