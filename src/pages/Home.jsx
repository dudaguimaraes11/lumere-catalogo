import { useMemo, useState } from "react";
import { FaSearch, FaSlidersH } from "react-icons/fa";
import Card from "../components/Card";

const movies = [
  {
    id: 1,
    title: "Interstellar",
    genre: "Ficção científica",
    year: 2014,
    rating: 8.7,
    image:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description:
      "Exploradores viajam pelo espaço em busca de um novo lar para a humanidade.",
  },
  {
    id: 2,
    title: "La La Land",
    genre: "Romance",
    year: 2016,
    rating: 8.0,
    image:
      "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    description:
      "Uma aspirante a atriz e um músico vivem uma intensa história em Los Angeles.",
  },
  {
    id: 3,
    title: "The Batman",
    genre: "Ação",
    year: 2022,
    rating: 7.8,
    image:
      "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    description:
      "Batman investiga crimes misteriosos que ameaçam Gotham City.",
  },
  {
    id: 4,
    title: "Get Out",
    genre: "Terror",
    year: 2017,
    rating: 7.8,
    image:
      "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
    description:
      "Uma visita à família da namorada se transforma em uma experiência assustadora.",
  },
  {
    id: 5,
    title: "Inception",
    genre: "Ficção científica",
    year: 2010,
    rating: 8.8,
    image:
      "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    description:
      "Um especialista invade sonhos e recebe uma missão quase impossível.",
  },
  {
    id: 6,
    title: "Barbie",
    genre: "Comédia",
    year: 2023,
    rating: 7.0,
    image:
      "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    description:
      "Barbie parte em uma aventura inesperada pelo mundo real.",
  },
  {
    id: 7,
    title: "The Godfather",
    genre: "Drama",
    year: 1972,
    rating: 9.2,
    image:
      "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    description:
      "A história de uma poderosa família envolvida no mundo do crime organizado.",
  },
  {
    id: 8,
    title: "Pulp Fiction",
    genre: "Crime",
    year: 1994,
    rating: 8.9,
    image:
      "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    description:
      "Histórias de criminosos se cruzam em uma narrativa cheia de violência e humor.",
  },
  {
    id: 9,
    title: "The Truman Show",
    genre: "Drama",
    year: 1998,
    rating: 8.2,
    image:
      "https://image.tmdb.org/t/p/w500/vuza0WqY239yBXOadKlGwrtkQy7.jpg",
    description:
      "Um homem descobre que toda a sua vida pode estar sendo transmitida para o mundo.",
  },
  {
    id: 10,
    title: "Spirited Away",
    genre: "Fantasia",
    year: 2001,
    rating: 8.6,
    image:
      "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    description:
      "Uma garota entra em um mundo mágico e precisa encontrar uma maneira de voltar para casa.",
  },
  {
    id: 11,
    title: "The Notebook",
    genre: "Romance",
    year: 2004,
    rating: 7.8,
    image:
      "https://image.tmdb.org/t/p/w500/rNzQyW4f8B8cQeg7vV7F8w3w2Wm.jpg",
    description:
      "Um casal enfrenta diferenças sociais e os desafios do tempo para viver seu amor.",
  },
  {
    id: 12,
    title: "The Shining",
    genre: "Terror",
    year: 1980,
    rating: 8.4,
    image:
      "https://image.tmdb.org/t/p/w500/9fgh3Ns1iRzlQNYuJyK0ARQZU7w.jpg",
    description:
      "Uma família se hospeda em um hotel isolado onde acontecimentos assustadores começam a acontecer.",
  },
  {
    id: 13,
    title: "Whiplash",
    genre: "Drama",
    year: 2014,
    rating: 8.5,
    image:
      "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeNOVIE.jpg",
    description:
      "Um jovem baterista busca alcançar a excelência sob a orientação de um professor extremamente exigente.",
  },
  {
    id: 14,
    title: "The Grand Budapest Hotel",
    genre: "Comédia",
    year: 2014,
    rating: 8.1,
    image:
      "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
    description:
      "As aventuras de um concierge e seu jovem funcionário em um luxuoso hotel europeu.",
  },
  {
    id: 15,
    title: "Joker",
    genre: "Crime",
    year: 2019,
    rating: 8.4,
    image:
      "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    description:
      "Um homem marginalizado começa uma transformação que muda completamente sua vida.",
  },
  {
    id: 16,
    title: "Dune",
    genre: "Ficção científica",
    year: 2021,
    rating: 8.0,
    image:
      "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    description:
      "Um jovem é levado a um planeta desértico envolvido em uma disputa pelo poder.",
  },
  {
    id: 17,
    title: "Titanic",
    genre: "Romance",
    year: 1997,
    rating: 7.9,
    image:
      "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    description:
      "Dois jovens de classes sociais diferentes se apaixonam durante uma viagem histórica.",
  },
  {
    id: 18,
    title: "Parasite",
    genre: "Drama",
    year: 2019,
    rating: 8.5,
    image:
      "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    description:
      "Uma família começa a se aproximar de uma família rica em uma história cheia de reviravoltas.",
  },
];

const Home = ({ favorites, onToggleFavorite }) => {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Todos");

  const genres = [
    "Todos",
    ...new Set(movies.map(movie => movie.genre)),
  ];

  const filteredMovies = useMemo(() => {
    return movies.filter(movie => {
      const matchesSearch = movie.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesGenre =
        selectedGenre === "Todos" ||
        movie.genre === selectedGenre;

      return matchesSearch && matchesGenre;
    });
  }, [search, selectedGenre]);

  return (
    <main>

      <section className="border-b border-[#8a5a2b] bg-[#3b0d18] px-6 py-16">
        <div className="mx-auto max-w-7xl">

          <p className="mb-4 text-xs font-bold tracking-[0.4em] text-[#d1a45b]">
            LUMÈRE FILM ARCHIVE
          </p>

        <h1 className="max-w-4xl font-serif text-5xl italic leading-tight text-[#F3DFA2] md:text-7xl">
  Encontre histórias
  <br />
  que ficam.
</h1>

          <p className="mt-6 max-w-xl leading-7 text-[#d8c5a3]">
            Um espaço para descobrir, guardar e revisitar
            os filmes que deixam alguma coisa depois dos créditos.
          </p>

          {/* PESQUISA EM CIMA */}
          <div className="mt-10 flex items-center gap-3 border border-[#8a5a2b] bg-[#2b080f] px-5 py-4">
            <FaSearch className="text-[#d1a45b]" />

            <input
              type="text"
              value={search}
              onChange={event => setSearch(event.target.value)}
              placeholder="Pesquise por um filme..."
              className="w-full bg-transparent text-[#f2e5c9] outline-none placeholder:text-[#8f7765]"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1800px] px-6 py-16">

        <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="mb-2 flex items-center gap-2 text-[#d1a45b]">
              <FaSlidersH />
              <span className="text-xs tracking-[0.2em]">
                EXPLORE
              </span>
            </div>

            <h2 className="font-serif text-4xl italic">
              Catálogo
            </h2>
          </div>

          <p className="text-sm text-[#bda987]">
            {filteredMovies.length} filme(s) encontrado(s)
          </p>
        </div>

        <div className="mb-12 flex flex-wrap gap-3">
          {genres.map(genre => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`border px-5 py-2 text-sm transition ${
                selectedGenre === genre
                  ? "border-[#d1a45b] bg-[#d1a45b] text-[#2b080f]"
                  : "border-[#8a5a2b] text-[#d8c5a3] hover:border-[#d1a45b]"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {filteredMovies.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7">
            {filteredMovies.map(movie => (
              <Card
                key={movie.id}
                movie={movie}
                isFavorite={favorites.includes(movie.id)}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-[#8a5a2b] py-20 text-center">
            <h3 className="font-serif text-3xl italic">
              Nenhum filme encontrado.
            </h3>

            <p className="mt-3 text-[#bda987]">
              Tente outro nome ou gênero.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Home;