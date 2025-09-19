import Hero from '../components/Hero';
import Steps, { Step } from '../components/Steps';


const steps: Step[] = [
    {
        icon: '📱', title: 'Instale o App IMREA', content: <>
            Baixe na <a className="text-imrea-green2 font-semibold" href="https://play.google.com/store/apps/details?id=com.netihc.portaldopaciente" target="_blank" rel="noreferrer">Google Play</a> ou <a className="text-imrea-green2 font-semibold" href="https://apps.apple.com/br/app/portal-do-paciente-hc/id1572694502?platform=iphone" target="_blank" rel="noreferrer">App Store</a> e faça seu login.
        </>
    },
    { icon: '📶', title: 'Verifique sua Conexão', content: 'Busque um local calmo, com boa conexão Wi-Fi ou 4G, evitando ruídos.' },
    { icon: '🎧', title: 'Teste áudio e vídeo', content: 'Antes da consulta, teste câmera e microfone. Utilize fones de ouvido, se possível.' },
    { icon: '🪪', title: 'Documentos e exames', content: 'Tenha um documento com foto e, se possível, exames recentes em mãos.' },
    { icon: '⏰', title: 'Acesse com antecedência', content: 'Entre no app 10 minutos antes do horário agendado.' },
    { icon: '🛠️', title: 'Problemas técnicos?', content: 'Contate nosso suporte pelo telefone ou WhatsApp.' },
];


function FAQCta() {
    return (
        <section className="bg-[#e6f9ed] text-center py-10 px-3">
            <h2 className="text-imrea-green text-xl mb-3">Dúvidas sobre o processo?</h2>
            <a href="/paginas/faq" className="btn-cta">Acesse o FAQ</a>
        </section>
    );
}


export default function Home() {
    return (
        <>
            <Hero />
            <Steps items={steps} />
            <FAQCta />
        </>
    );
}