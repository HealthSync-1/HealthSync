import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


const schema = z.object({ q: z.string().min(1, 'Digite algo para pesquisar') });
type SearchForm = z.infer<typeof schema>;


export default function Header() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<SearchForm>({ resolver: zodResolver(schema) });


    function onSubmit(data: SearchForm) {
        // Navegar para uma rota de busca (pode ser criada no futuro)
        // Por ora, simulamos a funcionalidade exigida com RHF válido
        alert(`Você buscou por: "${data.q}"`);
        reset();
        setOpen(false);
    }


    return (
        <header className="sticky top-0 z-50 shadow bg-gradient-to-r from-imrea-green to-imrea-green2 text-white">
            <nav className="container-max h-[70px] flex items-center gap-4">
                <div className="text-2xl font-bold tracking-[0.1em] cursor-pointer" onClick={() => navigate('/')}>IMREA</div>


                <button
                    className="ml-auto text-3xl lg:hidden"
                    aria-label={open ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={open}
                    onClick={() => setOpen(v => !v)}
                >
                    {open ? '×' : '☰'}
                </button>


                {/* Links Desktop */}
                <ul className="hidden lg:flex items-center gap-6">
                    <li><NavLink to="/" className={({ isActive }) => `px-4 py-2 rounded ${isActive ? 'bg-white text-imrea-green' : 'hover:bg-white hover:text-imrea-green'}`}>Início</NavLink></li>
                    <li><NavLink to="/paginas/integrantes" className={({ isActive }) => `px-4 py-2 rounded ${isActive ? 'bg-white text-imrea-green' : 'hover:bg-white hover:text-imrea-green'}`}>Equipe</NavLink></li>
                    <li><NavLink to="/paginas/faq" className={({ isActive }) => `px-4 py-2 rounded ${isActive ? 'bg-white text-imrea-green' : 'hover:bg-white hover:text-imrea-green'}`}>FAQ</NavLink></li>
                    <li><NavLink to="/paginas/contato" className={({ isActive }) => `px-4 py-2 rounded ${isActive ? 'bg-white text-imrea-green' : 'hover:bg-white hover:text-imrea-green'}`}>Contato</NavLink></li>
                    <li><NavLink to="/paginas/sobre" className={({ isActive }) => `px-4 py-2 rounded ${isActive ? 'bg-white text-imrea-green' : 'hover:bg-white hover:text-imrea-green'}`}>Sobre</NavLink></li>
                </ul>


                {/* Busca Desktop */}
                <form onSubmit={handleSubmit(onSubmit)} className="hidden lg:flex items-center gap-2">
                    <input {...register('q')} placeholder="Pesquisar no site..." aria-label="Pesquisar" className="rounded px-3 py-1 text-black" />
                    <button type="submit" className="px-4 py-1 rounded bg-imrea-green2 hover:bg-[#005042]">Buscar</button>
                </form>
            </nav>


            {/* Menu Mobile */}
            <div className={`lg:hidden fixed top-0 right-0 h-screen w-[70vw] max-w-[350px] bg-gradient-to-r from-imrea-green to-imrea-green2 shadow-2xl transform transition-transform duration-200 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
                <ul className="flex flex-col gap-3 pt-24 px-7">
                    {[
                        { to: '/', label: 'Início' },
                        { to: '/paginas/integrantes', label: 'Equipe' },
                        { to: '/paginas/faq', label: 'FAQ' },
                        { to: '/paginas/contato', label: 'Contato' },
                        { to: '/paginas/sobre', label: 'Sobre' },
                    ].map(link => (
                        <li key={link.to}>
                            <NavLink to={link.to} onClick={() => setOpen(false)} className={({ isActive }) => `block w-full px-3 py-2 rounded ${isActive ? 'bg-white text-imrea-green' : 'hover:bg-white hover:text-imrea-green'}`}>{link.label}</NavLink>
                        </li>
                    ))}
                    <li>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-2">
                            <input {...register('q')} placeholder="Pesquisar..." aria-label="Pesquisar" className="flex-1 rounded px-3 py-2 text-black" />
                            <button type="submit" className="px-3 py-2 rounded bg-imrea-green2 hover:bg-[#005042]">Buscar</button>
                        </form>
                        {errors.q && <p className="text-red-200 mt-1 text-sm">{errors.q.message}</p>}
                    </li>
                </ul>
            </div>
        </header>
    );
}