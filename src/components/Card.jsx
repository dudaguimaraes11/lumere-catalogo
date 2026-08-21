import { FaHeart, FaStar } from "react-icons/fa";

const Card = ({ movie, isFavorite, onToggleFavorite }) => {
  return (
    <article className="group overflow-hidden border border-[#8a5a2b] bg-[#2b080f] transition duration-300 hover:-translate-y-1 hover:border-[#d1a45b]">

      {/* IMAGEM */}
      <div className="relative flex h-[330px] items-center justify-center bg-[#1f060b] p-3">

        <img
          src={movie.image}
          alt={movie.title}
          className="h-full w-full object-contain"
        />

        {/* FAVORITO */}
        <button
          onClick={() => onToggleFavorite(movie.id)}
          aria-label={
            isFavorite
              ? `Remover ${movie.title} dos favoritos`
              : `Adicionar ${movie.title} aos favoritos`
          }
          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center border transition ${
            isFavorite
              ? "border-[#d1a45b] bg-[#d1a45b] text-[#2b080f]"
              : "border-[#d1a45b] bg-[#2b080f]/90 text-[#d1a45b] hover:bg-[#d1a45b] hover:text-[#2b080f]"
          }`}
        >
          <FaHeart />
        </button>
      </div>

      {/* INFORMAÇÕES */}
      <div className="p-5">

        <div className="mb-3 flex items-center justify-between gap-2">
          <span className="text-xs uppercase tracking-wider text-[#d1a45b]">
            {movie.genre}
          </span>

          <span className="text-xs text-[#a99176]">
            {movie.year}
          </span>
        </div>

        <h3 className="font-serif text-2xl italic text-[#f2e5c9]">
          {movie.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#bda987]">
          {movie.description}
        </p>

        <div className="mt-5 flex items-center gap-2 border-t border-[#5c3528] pt-4">
          <FaStar className="text-[#F3DFA2]" />

          <span className="font-semibold text-[#F3DFA2]">
            {movie.rating}
          </span>

          <span className="text-xs text-[#8f7765]">
            / 10
          </span>
        </div>

      </div>
    </article>
  );
};

export default Card;