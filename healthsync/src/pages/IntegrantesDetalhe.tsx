import { useParams, Link } from "react-router-dom";
import { integrantes } from "../data/integrantes";

export default function IntegranteDetalhe() {
  const { rm } = useParams();
  const integrante = integrantes.find((i) => i.rm === rm);

  if (!integrante) {
    return (
      <section className="container-max py-10">
        <p className="mb-4">Integrante não encontrado.</p>
        <Link className="text-imrea-green2 underline" to="/paginas/integrantes">
          Voltar
        </Link>
      </section>
    );
  }

  return (
    <section className="container-max py-10">
      <div className="card p-6 flex items-start gap-6 border-l-4 border-imrea-green2">
        <img
          src={integrante.img}
          alt={`Foto de ${integrante.nome}`}
          className="w-28 h-28 object-cover rounded-full border-4 border-imrea-green"
        />
        <div>
          <h1 className="text-2xl font-semibold text-imrea-green mb-2">
            {integrante.nome}
          </h1>
          <p className="mb-1">RM: {integrante.rm}</p>
          <p className="mb-3">Turma: {integrante.turma}</p>
          <p className="mb-2">
            <a
              className="text-imrea-green2 underline"
              href={integrante.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
          <p>
            <a
              className="text-imrea-green2 underline"
              href={integrante.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
          <Link
            className="inline-block mt-6 text-imrea-green2 underline"
            to="/paginas/integrantes"
          >
            Voltar
          </Link>
        </div>
      </div>
    </section>
  );
}
