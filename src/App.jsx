import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import Orders from "./components/Dashboard/Orders/Orders";
import Profile from "./components/Dashboard/Profile/Profile";
import { Home } from "./components/Home/Home";
import Layout from "./components/Layout";
import { NotFound } from "./components/NotFound";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/dashboard">
            <Route
              path=""
              element={
                <DashboardLayout>
                  <Profile />
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
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
