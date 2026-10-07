import { Routes, Route } from "react-router";

import Navigation from "./components/Navigation";

import Home from "./pages/Home";
import Case from "./pages/Case";
import Suspects from "./pages/Suspects";
import Evidence from "./pages/Evidence";
import Investigation from "./pages/Investigation";

function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case" element={<Case />} />
        <Route path="/suspects" element={<Suspects />} />
        <Route path="/evidence" element={<Evidence />} />
        <Route path="/investigation" element={<Investigation />} />
      </Routes>
    </div>
  );
}

export default App;