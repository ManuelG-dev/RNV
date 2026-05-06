import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Acerca from "./pages/Acerca";
import Tablas from "./pages/Tablas";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/tablas" element={<Tablas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;