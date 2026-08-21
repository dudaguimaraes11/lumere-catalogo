import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeIcon from "./components/HomeIcon";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((movieId) => movieId !== id)
        : [...previous, id]
    );
  };

  const renderPage = () => {
    if (currentPage === "about") {
      return <Sobre />;
    }

    if (currentPage === "contact") {
      return <Contato />;
    }

    return (
      <Home
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
      />
    );
  };

  return (
    <div className="min-h-screen bg-[#3b0d18] text-[#f2e5c9]">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        favoritesCount={favorites.length}
      />

      {renderPage()}

      <Footer />

      {currentPage !== "home" && (
        <HomeIcon setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
}

export default App;