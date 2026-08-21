import { useState } from "react";
import { z } from "zod";
import { FaPaperPlane } from "react-icons/fa";

const formularioSchema = z.object({
  nome: z.string().min(3, "Digite seu nome completo."),
  email: z.string().email("Informe um e-mail válido."),
  filme: z.string().min(2, "Informe o nome do filme."),
  genero: z.string().min(1, "Selecione um gênero."),
  mensagem: z
    .string()
    .min(10, "Escreva pelo menos 10 caracteres."),
});

const Formulario = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    filme: "",
    genero: "",
    mensagem: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setSuccess(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const result = formularioSchema.safeParse(form);

    if (!result.success) {
      const newErrors = {};

      result.error.issues.forEach((issue) => {
        newErrors[issue.path[0]] = issue.message;
      });

      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSuccess(true);

    setForm({
      nome: "",
      email: "",
      filme: "",
      genero: "",
      mensagem: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <div>
        <label className="mb-2 block text-sm">
          Seu nome
        </label>

        <input
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
          placeholder="Digite seu nome"
          className="w-full border border-[#74503a] bg-[#3b0d18] px-4 py-3 text-[#f2e5c9] outline-none focus:border-[#d1a45b]"
        />

        {errors.nome && (
          <p className="mt-2 text-sm text-[#e9a08c]">
            {errors.nome}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm">
          E-mail
        </label>

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="seuemail@email.com"
          className="w-full border border-[#74503a] bg-[#3b0d18] px-4 py-3 text-[#f2e5c9] outline-none focus:border-[#d1a45b]"
        />

        {errors.email && (
          <p className="mt-2 text-sm text-[#e9a08c]">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm">
          Filme
        </label>

        <input
          type="text"
          name="filme"
          value={form.filme}
          onChange={handleChange}
          placeholder="Nome do filme"
          className="w-full border border-[#74503a] bg-[#3b0d18] px-4 py-3 text-[#f2e5c9] outline-none focus:border-[#d1a45b]"
        />

        {errors.filme && (
          <p className="mt-2 text-sm text-[#e9a08c]">
            {errors.filme}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm">
          Gênero
        </label>

        <select
          name="genero"
          value={form.genero}
          onChange={handleChange}
          className="w-full border border-[#74503a] bg-[#3b0d18] px-4 py-3 text-[#f2e5c9] outline-none focus:border-[#d1a45b]"
        >
          <option value="">Selecione um gênero</option>
          <option value="Ação">Ação</option>
          <option value="Comédia">Comédia</option>
          <option value="Drama">Drama</option>
          <option value="Romance">Romance</option>
          <option value="Terror">Terror</option>
          <option value="Ficção científica">
            Ficção científica
          </option>
          <option value="Suspense">Suspense</option>
        </select>

        {errors.genero && (
          <p className="mt-2 text-sm text-[#e9a08c]">
            {errors.genero}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm">
          Por que devemos adicionar?
        </label>

        <textarea
          name="mensagem"
          value={form.mensagem}
          onChange={handleChange}
          placeholder="Conte sobre sua sugestão..."
          rows="4"
          className="w-full resize-none border border-[#74503a] bg-[#3b0d18] px-4 py-3 text-[#f2e5c9] outline-none focus:border-[#d1a45b]"
        />

        {errors.mensagem && (
          <p className="mt-2 text-sm text-[#e9a08c]">
            {errors.mensagem}
          </p>
        )}
      </div>

      {success && (
        <div className="border border-[#7c9a69] bg-[#263b25] p-4 text-sm">
          Sua sugestão foi enviada com sucesso!
        </div>
      )}

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-3 bg-[#d1a45b] px-6 py-4 font-semibold text-[#2b080f] transition hover:bg-[#e0b96f]"
      >
        <FaPaperPlane />
        ENVIAR SUGESTÃO
      </button>

    </form>
  );
};

export default Formulario;