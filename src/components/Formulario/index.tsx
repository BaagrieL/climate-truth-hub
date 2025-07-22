'use client';

import React, { useState } from 'react';

type FormularioProps = {
    campos: string[]; // exemplo: ['Usuário', 'Senha']
    nomeBotao: React.ReactNode;
    desabilitado?: boolean;
    onSubmit: (valores: Record<string, string>) => Promise<void>;
};

export default function Formulario({ campos, nomeBotao, onSubmit }: FormularioProps) {
    const [valores, setValores] = useState<Record<string, string>>(
        campos.reduce((acc, campo) => {
            acc[campo] = '';
            return acc;
        }, {} as Record<string, string>)
    );

    const [erro, setErro] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setErro(null);
        try {
            for (const campo of campos) {
                if (!valores[campo]) {
                    throw new Error(`O campo "${campo}" é obrigatório.`);
                }
            }

            await onSubmit(valores);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setErro(err.message);
            } else {
                setErro('Erro inesperado.');
            }
        }
    }

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-md">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm">
                {campos.map((campo, idx) => (
                    <input
                        key={idx}
                        type={campo.toLowerCase().includes('senha') ? 'password' : 'text'}
                        placeholder={campo}
                        value={valores[campo] ?? ''}
                        name={campo.toLowerCase()}
                        onChange={(e) =>
                            setValores({ ...valores, [campo]: e.target.value })
                        }
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
                    />
                ))}
                <button
                    type="submit"
                    className="bg-green-800 text-white p-2 rounded-md hover:bg-green-700 transition click:scale-95 font-bold tracking-wide"
                >
                    {nomeBotao}
                </button>
            </form>

            {erro && <p className="text-red-500 mt-4 text-center">Erro: {erro}</p>}
        </div>
    );
}
