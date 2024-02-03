import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
