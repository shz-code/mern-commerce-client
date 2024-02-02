import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import Layout from "./components/Layout";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
