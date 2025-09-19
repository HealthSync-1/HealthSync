import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


const schema = z.object({
    nome: z.string().min(1, 'Informe seu nome'),
    email: z.string().email('E-mail inválido'),
    mensagem: z.string().min(1, 'Escreva sua mensagem'),
});


type FormContato = z.infer<typeof schema>;


export default function Contato() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormContato>({ resolver: zodResolver(schema) });


    function onSubmit(data: FormContato) {
        alert('Mensagem enviada com sucesso!');
        reset();
    }


    return (
        <section className="bg-[linear-gradient(110deg,#f0f0f0_70%,#e0ffe4_100%)] py-10 px-3">
            <div className="container-max">
                <h1 className="text-3xl text-imrea-green font-semibold mb-6">Entre em Contato</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto flex flex-col gap-4">
                    <input {...register('nome')} placeholder="Seu nome" className="border rounded px-3 py-2" />
                    {errors.nome && <p className="text-red-600 text-sm">{errors.nome.message}</p>}


                    <input {...register('email')} placeholder="Seu e-mail" className="border rounded px-3 py-2" />
                    {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}


                    <textarea {...register('mensagem')} placeholder="Sua mensagem" className="border rounded px-3 py-2 min-h-[150px]"></textarea>
                    {errors.mensagem && <p className="text-red-600 text-sm">{errors.mensagem.message}</p>}


                    <button type="submit" className="btn-cta w-full">Enviar</button>
                </form>
                <div className="text-center text-imrea-green mt-6">
                    <p><strong>Telefone:</strong> (11) 1234-5678</p>
                    <p><strong>WhatsApp:</strong> (11) 98765-4321</p>
                    <p><strong>Endereço:</strong> Av. Dr. Enéas de Carvalho Aguiar, 255 - São Paulo, SP</p>
                </div>
            </div>
        </section>
    );
}