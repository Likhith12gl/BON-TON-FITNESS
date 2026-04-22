import "@/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/Home";
import Transformation from "@/pages/Transformation";
import Programs from "@/pages/Programs";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transformation" element={<Transformation />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
