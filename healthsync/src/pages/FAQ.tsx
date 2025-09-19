export default function FAQ() {
    return (
        <section className="bg-[linear-gradient(110deg,#f0f0f0_70%,#e0ffe4_100%)] py-10 px-3">
            <div className="container-max">
                <h1 className="text-3xl text-imrea-green font-semibold mb-6">Perguntas Frequentes (FAQ)</h1>


                <details className="card border-l-4 border-imrea-green2 p-4 mb-4">
                    <summary className="cursor-pointer font-semibold text-imrea-green">Como faço para agendar uma teleconsulta?</summary>
                    <p className="mt-2">Pelo aplicativo IMREA, na seção de agendamento, ou entrando em contato pela página "Contato".</p>
                </details>


                <details className="card border-l-4 border-imrea-green2 p-4 mb-4">
                    <summary className="cursor-pointer font-semibold text-imrea-green">Quais documentos preciso para a consulta?</summary>
                    <p className="mt-2">Documento com foto (RG ou CPF) e, se tiver, exames recentes.</p>
                </details>


                <details className="card border-l-4 border-imrea-green2 p-4 mb-4">
                    <summary className="cursor-pointer font-semibold text-imrea-green">Preciso pagar pela teleconsulta?</summary>
                    <p className="mt-2">O IMREA atende via SUS, convênios e particular. Consulte a unidade para sua categoria.</p>
                </details>


                <details className="card border-l-4 border-imrea-green2 p-4">
                    <summary className="cursor-pointer font-semibold text-imrea-green">Posso remarcar minha consulta?</summary>
                    <p className="mt-2">Sim! Basta acessar o app ou nos avisar pela página de contato.</p>
                </details>
            </div>
        </section>
    );
}