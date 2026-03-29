import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home1";
import sasmita from "./pages/sasmita";
import angeliqia from "./pages/angeliqia";
import rachel from "./pages/rachel";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sasmita" element={<sasmita />} />
        <Route path="/angeliqia" element={<angeliqia />} />
        <Route path="/rachel" element={<rachel />} />
      </Routes>
    </Router>
  );
}

export default App;