export default function Sobre() {
    return (
        <section className="bg-[linear-gradient(110deg,#f0f0f0_70%,#e0ffe4_100%)] py-10 px-3">
            <div className="container-max max-w-3xl">
                <h1 className="text-3xl text-imrea-green font-semibold mb-6">Sobre o Projeto</h1>
                <p className="mb-4">O IMREA – Teleconsulta é uma SPA (Single Page Application) construída em React + Vite + TypeScript, com foco em acessibilidade, responsividade e orientada a componentes reutilizáveis. As páginas da Sprint 02 foram reestruturadas seguindo as boas práticas da Sprint 03.</p>
                <ul className="list-disc ml-6 space-y-2">
                    <li>Stack: React + Vite + TS, TailwindCSS.</li>
                    <li>Formulários e entradas: React Hook Form + Zod.</li>
                    <li>Rotas estáticas e dinâmicas (useParams).</li>
                    <li>Sem bibliotecas proibidas e sem CDNs externas na entrega.</li>
                </ul>
            </div>
        </section>
    );
}