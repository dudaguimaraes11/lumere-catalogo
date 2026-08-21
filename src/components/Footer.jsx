import { FaFilm } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-[#8a5a2b] bg-[#2b080f] px-6 py-10 text-center">
      <FaFilm className="mx-auto mb-4 text-xl text-[#d1a45b]" />

      <h2 className="font-serif text-2xl italic text-[#f2e5c9]">
        Lumère
      </h2>

      <p className="mt-3 text-sm text-[#bda987]">
        Onde cada filme encontra seu lugar.
      </p>

      <p className="mt-6 text-xs text-[#7f6653]">
        © 2026 Lumère Film Archive
      </p>
    </footer>
  );
};

export default Footer;