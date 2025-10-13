import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import SolutionsPage from "./pages/Solutions";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/solutions" element={<SolutionsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;