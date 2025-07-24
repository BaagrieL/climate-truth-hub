import { useState } from "react";
import { createNoticia, CreateNoticiaResponseProps } from "@/services/submissionService";
import { getToken } from "@/utils/token.utils";
import { useRouter } from "next/navigation";

interface Props {
    onClose: () => void;
    onSuccess: (submission: CreateNoticiaResponseProps) => void;
}

export default function NewSubmissionModal({ onClose, onSuccess }: Props) {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [type, setType] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        try {
            const token = getToken();

            if (!token) {
                router.push("/login");
            }

            const novaSubmissao = await createNoticia({ title, content, type});
            onSuccess(novaSubmissao);
        } catch (error) {
            if (error instanceof Error) {
                alert(error.message);
            }
            alert("Erro ao criar submissão");
        }
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-[#ccd1d1] p-6 rounded-lg w-[400px]">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Nova Submissão</h2>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Título"
                        className="w-full mb-2 border p-2 rounded text-gray-800"
                        required
                    />
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Conteúdo"
                        className="w-full mb-4 border p-2 rounded text-gray-800"
                        rows={4}
                        required
                    />
                    <div className="flex justify-between gap-4 text-gray-800 px-12 py-2 pb-4">
                        <div className="flex gap-2 items-center">
                            <input
                                type="radio"
                                id="noticia"
                                name="tipo"
                                value="noticia"
                                checked={type === "noticia"}
                                required
                                onChange={(e) => setType(e.target.value)}
                            />
                            <label htmlFor="noticia">Notícia</label>
                        </div>

                        <div className="flex gap-2 items-center">
                            <input
                                type="radio"
                                id="artigo"
                                name="tipo"
                                value="artigo"
                                checked={type === "artigo"}
                                onChange={(e) => setType(e.target.value)}
                            />
                            <label htmlFor="artigo">Artigo</label>
                        </div>
                    </div>

                    <div className="flex justify-end gap-2">
                        <button type="button" onClick={onClose} className="text-gray-700 hover:text-gray-900">
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700"
                        >
                            Criar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
