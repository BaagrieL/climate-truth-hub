import { getJSON } from '@/services/httpClienteService';

export interface NoticiaProps {
  id: string;
  title: string;
  content: string;
  type: string;
  status: string;
}

export async function fetchNoticias(): Promise<NoticiaProps[]> {
  const token = localStorage.getItem('token');

  const headers: Record<string, string> = token
    ? { Authorization: `Bearer ${token}` }
    : {};

  return await getJSON<NoticiaProps[]>('https://climate-truth-api.onrender.com/submission', headers);
}   


