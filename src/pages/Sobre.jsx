import { FaFilm, FaHeart, FaSearch } from "react-icons/fa";

const Sobre = () => {
  const features = [
    {
      icon: <FaSearch />,
      title: "Descubra",
      text: "Explore filmes através de gêneros e encontre novas histórias.",
    },
    {
      icon: <FaHeart />,
      title: "Guarde",
      text: "Monte uma coleção pessoal com os filmes que mais marcaram você.",
    },
    {
      icon: <FaFilm />,
      title: "Revisite",
      text: "Porque algumas histórias merecem ser encontradas mais de uma vez.",
    },
  ];

  return (
    <main className="min-h-screen px-6 py-20">
      <section className="mx-auto max-w-5xl text-center">

        <p className="text-xs tracking-[0.4em] text-[#d1a45b]">
          SOBRE O LUMÈRE
        </p>

        <h1 className="mt-6 font-serif text-5xl italic text-[#f2e5c9] md:text-7xl">
          Cinema que permanece.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl leading-8 text-[#d8c5a3]">
          Lumère é um catálogo criado para quem acredita
          que um filme não termina quando a tela fica preta.
          Aqui, você pode descobrir títulos e guardar aqueles
          que merecem ficar na sua lista.
        </p>
      </section>

      <section className="mx-auto mt-20 grid max-w-6xl gap-6 md:grid-cols-3">
        {features.map(({ icon, title, text }) => (
          <article
            key={title}
            className="border border-[#8a5a2b] bg-[#2b080f] p-8"
          >
            <div className="text-3xl text-[#d1a45b]">
              {icon}
            </div>

            <h2 className="mt-6 font-serif text-3xl italic">
              {title}
            </h2>

            <p className="mt-4 leading-7 text-[#bda987]">
              {text}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Sobre;