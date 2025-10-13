import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import SolutionsPage from "./pages/Solutions";
import Services from "./pages/Services";
import Projects from "./pages/Projects";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/project" element={<Projects/>} />
      </Routes>
    </Layout>
  );
}

export default App;