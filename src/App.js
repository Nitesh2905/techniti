import "./App.css";
import Home from "./components/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Events from "./components/Events";
import OurTeam from "./components/OurTeam";
import About from "./components/About";
import Chemical1 from "./Events/Chemical1";
import Chemical2 from "./Events/Chemical2";
import NavbarN from "./components/NavbarN";

import Prayaas from "./Events/Prayaas";
function App() {
  return (
    <>
      <Router>
        <NavbarN />

        <Routes>
          <Route path="/events" element={<Events />} exact />
          <Route path="/" element={<Home />} exact />
          <Route path="/team" element={<OurTeam />} exact />
          <Route path="/about" element={<About />} exact />
          {/* events */}
          <Route path="/chemedesign" element={<Chemical1 />} exact />
          <Route path="/chemecar" element={<Chemical2 />} exact />
          <Route path="/prayaas" element={<Prayaas />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
