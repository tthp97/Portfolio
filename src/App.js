import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProfilDescription from "./pages/ProfilDescription";
import ProjetRéalisés from "./pages/ProjetRéalisés";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Portfolio" element={<Home />} />
        <Route path="/Profil" element={<ProfilDescription />} />
        <Route path="/Projets" element={<ProjetRéalisés />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
