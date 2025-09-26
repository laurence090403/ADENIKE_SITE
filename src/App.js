import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Produits from "./pages/Products";
import Projets from "./pages/Projects";
import Mission from "./pages/Mission";
import Contact from "./pages/Contact";
import Project1 from "./pages/projectsres";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/histoire" element={<About />} />
        <Route path="/products" element={<Produits />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/proj1" element={<Project1 />} />
      </Routes>
    </Router>
  );
}

export default App;
