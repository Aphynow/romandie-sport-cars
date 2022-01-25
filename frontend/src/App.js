import "./stylesheets/main.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { Agenda, Contact, Galerie, Home, Liens, Membres, News } from "./pages";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
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
        </Routes>
      </main>
    </div>
  );
}

export default App;
