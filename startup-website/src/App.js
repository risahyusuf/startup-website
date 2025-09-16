import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./Pages/Home"
import Portfolio from "./Pages/Portfolio"
import Services from "./Pages/Services"
import Contact from "./Pages/Contact"

function App() {
  return(
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
