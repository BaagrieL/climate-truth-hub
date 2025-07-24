'use client';

import { useState, useEffect } from 'react';
import Carrossel from "@/components/Carrossel";
import { fetchNoticias } from "@/services/submissionService";
import { useRouter } from 'next/navigation';
import Spinner from '@/components/Spinner';
import { theresToken } from '@/utils/token.utils';
import Button_create_new from '@/components/Button_create_new';

interface NoticiaType {
    title: string;
    content: string;
    type: string;
    id?: string;
}

export default function FactsPage() {
    const [loading, setLoading] = useState<boolean>(true);
    const [erro, setErro] = useState<string | null>(null);
    const [noticias, setNoticias] = useState<NoticiaType[]>([]);
    const router = useRouter();


    useEffect(() => {
        async function checkAndLoadContent() {
            setLoading(true);
            setErro(null);

            if (!theresToken()) {
                router.push("/login");

                return;
            }

            try {
                const fetchedNoticias: NoticiaType[] = await fetchNoticias();
                setNoticias(fetchedNoticias);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setErro(`Erro de autenticação ou carregamento: ${err.message}. Redirecionando...`);
                } else {
                    setErro('Erro desconhecido ao validar token ou carregar notícias. Redirecionando...');
                }
                router.push("/login");
                return;
            } finally {
                setLoading(false);
            }
        }

        checkAndLoadContent();
    }, []);

    return (
        <div className="flex flex-col items-flex-start py-12 px-8 w-full gap-6 min-h-calc(100vh - 664px)">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-300 max-w-2xl">Climate Facts</h1>

            {loading && <div className="flex h-full w-full absolute justify-center items-center"><Spinner size="md" color="white" /></div>}
            {erro && (
                <p className="text-red-500 mt-4 p-2d">
                    {erro}
                </p>
            )}
            {!loading && !erro && noticias.length > 0 && (
                <Carrossel noticias={noticias} />
            )}
            {!loading && !erro && noticias.length === 0 && (
                <p className="text-gray-400 mt-4">Nenhuma notícia encontrada no momento.</p>
            )}

            <Button_create_new classes="absolute bg-green-700 z-2 bottom-[14%] right-[10%] lg:bottom-[7%] lg:right-[5%]" size="lg" />

        </div >
    );
}