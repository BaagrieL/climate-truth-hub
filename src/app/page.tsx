import Link from "next/link";
import Image from "next/image";
import Carrossel from "@/components/Carrossel";

export default function Home() {
  return (
    <main className="flex flex-col text-center py-20 px-8 gap-6 min-h-screen bg-[#050f1c] position-relative">


      {/* Imagem de fundo em outra camada */}
      <Image
        src="/fundo-mar-api.png"
        fill
        style={{ objectFit: "cover" }}
        alt="Imagem"
        priority
        className="absolute inset-0 -z-10 opacity-50"
      />

      <h1 className="text-3xl md:text-5xl font-bold text-gray-300 max-w-2xl text-left">
        Descubra a verdade sobre as mudanças climáticas.
      </h1>

      <p className="text-gray-400 md:max-w-lg text-left">
        Informação confiável, curada pela comunidade. O futuro começa com conhecimento.
      </p>

      {/* Botões de ação */}
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <Link
          href={"/facts"}
          className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
        >
          Ver Fatos Verificados
        </Link>

        <Link
          href={"/contribuir"}
          className="border border-green-600 text-green-600 px-6 py-3 rounded-full hover:text-green-500 hover:border-green-500 transition"
        >
          Contribuir com Informações
        </Link>
      </div>
    </main>
  );
}
