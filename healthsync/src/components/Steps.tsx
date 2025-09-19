import type { ReactNode } from "react";


export type Step = { icon: string; title: string; content: ReactNode };


export default function Steps({ items }: { items: Step[] }) {
    return (
        <section className="container-max py-8">
            <h2 className="text-imrea-green text-xl mb-6">Como se preparar para a teleconsulta</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((s, i) => (
                    <section className="card border-l-4 border-imrea-green2 p-5 flex gap-4" key={i}>
                        <span className="text-3xl text-imrea-green2" aria-hidden>{s.icon}</span>
                        <div>
                            <h3 className="text-imrea-green font-semibold mb-1">{s.title}</h3>
                            <p className="leading-relaxed">{s.content}</p>
                        </div>
                    </section>
                ))}
            </div>
        </section>
    );
}