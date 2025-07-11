// LoginPage.tsx
'use client';

import { useRouter } from 'next/navigation';
import { login } from '@/services/authService';
import { LoginCredentials } from '@/services/authService';
import { useState } from 'react';
import Formulario from '@/components/Formulario';

export default function LoginPage() {
  const router = useRouter();
  const [erro, setErro] = useState<string | null>(null);

  async function handleLogin(dados: Record<string, string>) {
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
    } catch (err: any) {
      setErro(err.message);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8">
      <Formulario
        campos={['Usuário', 'Senha']}
        nomeBotao="Entrar"
        onSubmit={handleLogin}
      />
      {erro && (
        <p className="text-red-500 text-center mt-4">Erro: {erro}</p>
      )}
    </div>
  );
}
