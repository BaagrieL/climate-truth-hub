import { deleteJSON, getJSON, postJSON } from "@/services/httpClienteService";
import { getToken, theresToken } from "@/utils/token.utils";

export interface NoticiaProps {
  id?: string;
  title: string;
  content: string;
  type: string;
  status?: string;
}

export interface CreateNoticiaResponseProps {
  message: string;
  submission: NoticiaProps;
}

export async function fetchNoticias(): Promise<NoticiaProps[]> {
  const token = localStorage.getItem("token");

  const headers: Record<string, string> = token
    ? { Authorization: `Bearer ${token}` }
    : {};

  return await getJSON<NoticiaProps[]>(
    "https://climate-truth-api.onrender.com/submission",
    headers
  );
}

export async function createNoticia(
  data: NoticiaProps
): Promise<CreateNoticiaResponseProps> {
  const headers: Record<string, string> = theresToken()
    ? {
        Authorization: `Bearer ${getToken()}`,
      }
    : {};

  return await postJSON<CreateNoticiaResponseProps, NoticiaProps>(
    "https://climate-truth-api.onrender.com/submission/register",
    data,
    headers
  );
}

export async function deleteNoticia(id: string): Promise<CreateNoticiaResponseProps> {
  const headers: Record<string, string> = theresToken()
    ? {
        Authorization: `Bearer ${getToken()}`,
      }
    : {};

  return await deleteJSON<CreateNoticiaResponseProps>(
    `https://climate-truth-api.onrender.com/submission/delete/${id}`,
    headers
  );
}
