import "./stylesheets/main.scss";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import {
  Agenda,
  Contact,
  Galerie,
  Home,
  Liens,
  Membres,
  News,
  Admin,
  Profil,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [openLogin, setOpenLogin] = useState(false);

  const toggleLogin = () => {
    setOpenLogin(!openLogin);
  };

  return (
    <div className="App">
      {openLogin && <Login toggleLogin={toggleLogin} />}
      <Navbar toggleLogin={toggleLogin} />
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/liens" element={<Liens />} />
          <Route path="/membres" element={<Membres />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/profil/:id" element={<Profil />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
