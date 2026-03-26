import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home1";
import Fidho from "./pages/Fidho";
import Ardan from "./pages/Ardan";
import Dias from "./pages/Dias";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fidho" element={<Fidho />} />
        <Route path="/ardan" element={<Ardan />} />
        <Route path="/dias" element={<Dias />} />
      </Routes>
    </Router>
  );
}

export default App;