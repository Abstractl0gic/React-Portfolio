import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/project/:id" />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;