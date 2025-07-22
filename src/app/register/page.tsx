'use client';

import { useState } from 'react';
import { register } from "@/services/authService";
import { RegisterCredentials } from "@/services/authService";
import Formulario from "@/components/Formulario";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Spinner from '@/components/Spinner';



export default function RegisterPage() {
    const [erro, setErro] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const  router = useRouter();

    async function handleRegister(dados: Record<string, string>) {
        setLoading(true);
        try {
            setErro(null);

            const username = dados['username'];
            const password = dados['password'];
            
            if (!username || !password) {
                console.error(`Usuário e senha são obrigatórios - username: ${username}, password: ${password}`);
                throw new Error('Usuário e senha são obrigatórios');
            }

            const user: RegisterCredentials = {
                username,
                password,
                role: dados['username'] === 'admin' ? 'admin' : 'common'
            }


            const response = await register(user);

            console.log('Registro bem-sucedido:', response);

            router.push('/login');

        } catch (error: unknown) {
            console.error('Erro no registro:', error);
            if (error instanceof Error) {
                setErro(error.message);
            } else {
                setErro('Erro desconhecido');
            }

        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col items-center h-[calc(100%-5rem)] justify-start py-50 px-8">
            <Formulario
                campos={['username', 'password']}
                nomeBotao={loading ? <Spinner size="sm" color="white" /> : 'Cadastrar'}
                desabilitado={loading}
                onSubmit={handleRegister} />
            <p className="text-gray-500 text-center mt-4">
                Já tem uma conta? <Link href="/login" className="text-blue-500 hover:underline">Faça login</Link>
            </p>
            {erro && (
                <p className="text-red-500 text-center mt-4">
                    Erro: {erro}
                </p>
            )}
        </div>
    );
}