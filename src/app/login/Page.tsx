export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4">Login</h1>

      <form className="flex flex-col gap-2 w-64">
        <input
          type="text"
          name="username"
          placeholder="Nome de usuário"
          className="border rounded p-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          className="border rounded p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
        >
          Entrar
        </button>
      </form>
    </main>
  );
}
