import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Categories from "./components/Dashboard/Categories/Categories";
import Dashboard from "./components/Dashboard/Dashboard";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import Orders from "./components/Dashboard/Orders/Orders";
import Payments from "./components/Dashboard/Payments/Payments";
import Products from "./components/Dashboard/Products/Products";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { Home } from "./components/Home/Home";
import Layout from "./components/Layout";
import ProductDetails from "./components/Product/ProductDetails";
import Shop from "./components/Shop/Shop";
import { userLoggedIn, userLoggedOut } from "./features/auth/authSlice";

function App() {
  const [authCheck, setAuthCheck] = useState(false);
  const { _id } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      const { exp, username, _id, role } = JSON.parse(auth);
      if (new Date(exp) > new Date()) {
        const { token } = JSON.parse(localStorage.getItem("token"));
        dispatch(
          userLoggedIn({
            username: username,
            _id: _id,
            role: role,
            exp: exp,
            token: token,
          })
        );
      } else {
        dispatch(userLoggedOut());
      }
    }
    setAuthCheck(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let links = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="*" element={<Navigate to="login" replace />} />
    </Routes>
  );
  if (_id) {
    links = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/dashboard">
          <Route
            path=""
            element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            }
          />
          <Route
            path="orders"
            element={
              <DashboardLayout>
                <Orders />
              </DashboardLayout>
            }
          />
          <Route
            path="products"
            element={
              <DashboardLayout>
                <Products />
              </DashboardLayout>
            }
          />
          <Route
            path="categories"
            element={
              <DashboardLayout>
                <Categories />
              </DashboardLayout>
            }
          />
          <Route
            path="payments"
            element={
              <DashboardLayout>
                <Payments />
              </DashboardLayout>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="dashboard" replace />} />
      </Routes>
    );
  }

  return (
    authCheck && (
      <Router>
        <Layout>{links}</Layout>
      </Router>
    )
  );
}

export default App;
