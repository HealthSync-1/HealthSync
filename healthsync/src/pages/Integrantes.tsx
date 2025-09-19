import { Link } from 'react-router-dom';
import { integrantes } from '../data/integrantes';


export default function Integrantes() {
    return (
        <section className="bg-[linear-gradient(110deg,#f0f0f0_70%,#e0ffe4_100%)] py-10 px-3">
            <div className="container-max">
                <h1 className="text-3xl text-imrea-green font-semibold mb-6">Integrantes da Equipe</h1>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {integrantes.map((i) => (
                        <div key={i.rm} className="card p-5 flex gap-4 border-l-4 border-imrea-green2">
                            <img src={i.img} alt={`Foto de ${i.nome}`} className="w-20 h-20 object-cover rounded-full border-4 border-imrea-green" />
                            <div className="text-sm">
                                <h2 className="text-lg font-semibold text-imrea-green mb-1">{i.nome}</h2>
                                <p className="mb-1">RM: {i.rm} | Turma: {i.turma}</p>
                                <p className="mb-2">
                                    <a className="text-imrea-green2 font-semibold" href={i.github} target="_blank" rel="noreferrer">GitHub</a> |
                                    <a className="text-imrea-green2 font-semibold ml-2" href={i.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                                </p>
                                <Link className="text-sm underline" to={`/paginas/integrantes/${i.rm}`}>Ver detalhes</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}