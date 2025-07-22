export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 gap-16 text-gray-900">
      
      {/* Título Principal */}
      <section className="text-center max-w-4xl">
        <h1 className="text-5xl text-green-800 font-extrabold tracking-tight mb-4">Climate Truth Hub</h1>
        <p className="text-xl text-gray-400">
          Uma plataforma dedicada à verdade climática — contra a desinformação, a favor da ciência.
        </p>
      </section>

      {/* Missão */}
      <section className="rounded-2xl p-8 max-w-3xl shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-3 text-red-900">🌍 Nossa Missão</h2>
        <p className="text-lg text-gray-400">
          Lutar contra a desinformação climática promovendo acesso aberto a informações verificadas, com base em dados científicos e responsabilidade social.
        </p>
      </section>

      {/* Visão */}
      <section className="rounded-2xl p-8 max-w-3xl shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-3 text-blue-900">🔭 Nossa Visão</h2>
        <p className="text-lg text-gray-400">
          Ser referência em transparência ambiental, conectando pessoas e iniciativas que acreditam no poder da informação como ferramenta de transformação.
        </p>
      </section>

      {/* Comunidade */}
      <section className="rounded-2xl p-8 max-w-3xl shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-3 text-yellow-900">🤝 Nossa Comunidade</h2>
        <p className="text-lg text-gray-400">
          Acreditamos na colaboração entre cidadãos, pesquisadores e ativistas. Criamos um espaço onde todos podem participar ativamente, compartilhar conhecimento e construir soluções juntos.
        </p>
      </section>
    </div>
  );
}
