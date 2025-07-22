// LoginPage.tsx
'use client';

import { useRouter } from 'next/navigation';
import { login } from '@/services/authService';
import { LoginCredentials } from '@/services/authService';
import { useState } from 'react';
import Formulario from '@/components/Formulario';
import Link from 'next/link';
import Spinner from '@/components/Spinner';

export default function LoginPage() {
  const router = useRouter();
  const [erro, setErro] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleLogin(dados: Record<string, string>) {
    setLoading(true);
    setErro(null);
    try {
      const user: LoginCredentials = {
        username: dados['Usuário'],
        password: dados['Senha']
      };

      if (!user.username || !user.password) {
        throw new Error('Usuário e senha são obrigatórios');
      }

      const token = await login(user);
      if (!token) {
        throw new Error('Falha ao obter token');
      }

      localStorage.setItem('token', token);
      router.push('/');
    } catch (err: unknown) {
      console.error('Erro no login:', err);
      if (err instanceof Error) {
        setErro(err.message);
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
        campos={['Usuário', 'Senha']}
        nomeBotao={ loading ? <Spinner size="sm" color="white" /> : "Entrar"}
        desabilitado={loading}
        onSubmit={handleLogin}
      />
      <p className="text-gray-500 text-center mt-4">
        Não tem uma conta? <Link href="/register" className="text-blue-500 hover:underline">Cadastre-se</Link>
      </p>
      {erro && (
        <p className="text-red-500 text-center mt-4">Erro: {erro}</p>
      )}
    </div>
  );
}
