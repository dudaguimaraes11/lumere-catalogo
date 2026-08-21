import { FaHome } from "react-icons/fa";

const HomeIcon = ({ setCurrentPage }) => {
  return (
    <button
      onClick={() => setCurrentPage("home")}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#d1a45b] text-[#3b0d18] shadow-lg transition hover:scale-110"
      title="Voltar para o início"
    >
      <FaHome />
    </button>
  );
};

export default HomeIcon;