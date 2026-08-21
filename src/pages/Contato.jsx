import { FaFilm } from "react-icons/fa";
import Formulario from "../components/Formulario";

const Contato = () => {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">

        <section className="flex flex-col justify-center">
          <div className="mb-6 flex items-center gap-3 text-[#d1a45b]">
            <FaFilm />

            <span className="text-xs tracking-[0.3em]">
              LUMÈRE FILM ARCHIVE
            </span>
          </div>

          <h1 className="font-serif text-5xl italic leading-tight md:text-6xl">
            Sentiu falta
            <br />
            de algum filme?
          </h1>

          <p className="mt-6 max-w-lg leading-8 text-[#cdbb9b]">
            Sugira um filme para o nosso catálogo.
            Queremos descobrir novas histórias através
            de quem também ama cinema.
          </p>
        </section>

        <section className="border border-[#8a5a2b] bg-[#2b080f] p-6 md:p-10">
          <p className="text-xs tracking-[0.25em] text-[#d1a45b]">
            SUGIRA UM FILME
          </p>

          <h2 className="mb-8 mt-2 font-serif text-3xl italic">
            Conte para nós
          </h2>

          <Formulario />
        </section>

      </div>
    </main>
  );
};

export default Contato;