import { FaBars, FaTimes, FaFilm } from "react-icons/fa";
import { useState } from "react";

const Header = ({ currentPage, setCurrentPage, favoritesCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = page => {
    setCurrentPage(page);
    setMenuOpen(false);
  };

  return (
    <header className="border-b border-[#8a5a2b] bg-[#2b080f] text-[#f2e5c9]">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

        <button
          onClick={() => navigate("home")}
          className="text-left"
        >
          <h1 className="font-serif text-4xl italic tracking-wide">
            Lumère
          </h1>

          <p className="text-[10px] tracking-[0.3em] text-[#d1a45b]">
            FILM ARCHIVE
          </p>
        </button>

        <nav className="hidden gap-8 md:flex">
          <button
            onClick={() => navigate("home")}
            className={`transition hover:text-[#d1a45b] ${
              currentPage === "home"
                ? "text-[#d1a45b]"
                : ""
            }`}
          >
            Início
          </button>

          <button
            onClick={() => navigate("favorites")}
            className={`transition hover:text-[#d1a45b] ${
              currentPage === "favorites"
                ? "text-[#d1a45b]"
                : ""
            }`}
          >
            Favoritos ({favoritesCount})
          </button>

          <button
            onClick={() => navigate("about")}
            className={`transition hover:text-[#d1a45b] ${
              currentPage === "about"
                ? "text-[#d1a45b]"
                : ""
            }`}
          >
            Sobre
          </button>

          <button
            onClick={() => navigate("contact")}
            className="border border-[#d1a45b] px-4 py-2 text-sm transition hover:bg-[#d1a45b] hover:text-[#2b080f]"
          >
            Sugira um filme
          </button>
        </nav>

        <div className="hidden text-2xl text-[#d1a45b] md:block">
          <FaFilm />
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-5 border-t border-[#8a5a2b] bg-[#2b080f] px-6 py-6 md:hidden">
          <button
            onClick={() => navigate("home")}
            className="text-left"
          >
            Início
          </button>

          <button
            onClick={() => navigate("favorites")}
            className="text-left"
          >
            Favoritos ({favoritesCount})
          </button>

          <button
            onClick={() => navigate("about")}
            className="text-left"
          >
            Sobre
          </button>

          <button
            onClick={() => navigate("contact")}
            className="text-left"
          >
            Sugira um filme
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;