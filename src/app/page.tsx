import Carrossel from "@/components/Carrossel";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="relative h-screen">

        {/* Imagem de fundo em outra camada */}
        <Image
          src="/fundo-mar-api.png"
          fill
          style={{ objectFit: "cover" }}
          alt="Imagem"
          priority
        />


        {/* Conteúdo em cima */}
        <div className="relative z-10 flex justify-center items-center h-full">
          <Carrossel />
        </div>

      </div>

    </main>
  );
}
