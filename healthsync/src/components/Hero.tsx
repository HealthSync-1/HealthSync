export default function Hero() {
    return (
        <section className="bg-[linear-gradient(110deg,#f0f0f0_70%,#e0ffe4_100%)] text-center shadow">
            <div className="container-max py-12 md:py-20 flex flex-wrap items-center justify-center gap-10">
                <img src="/img/Ilustracao-TLC.jpg" alt="Ilustração Teleconsulta" className="w-60 max-w-full" />
                <div>
                    <h1 className="text-3xl md:text-4xl font-semibold text-imrea-green mb-3">Bem-vindo ao IMREA</h1>
                    <p className="text-lg md:text-xl">
                        Seu acesso à medicina física e reabilitação de excelência.<br />
                        Veja como se preparar para sua <strong>teleconsulta</strong> de maneira prática e segura.
                    </p>
                    <a href="https://lp.reabilitando.com.br/agendamento?utm_source=GoogleAds&utm_medium=PMAX&utm_campaign=Geral3OndasFisio" className="btn-cta mt-4" target="_blank" rel="noreferrer">Agende sua Teleconsulta</a>
                </div>
            </div>
        </section>
    );
}