"use server";

export async function login(formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  console.log(`Usuário: ${username} | Senha: ${password}`);

  // Aqui você pode fazer validação, buscar no banco, etc.
  // Exemplo simples de redirecionamento em caso de sucesso (simulado):
  
  if (username === "admin" && password === "123") {
    // Retorne algo ou faça redirecionamento conforme necessidade
    console.log("Login bem-sucedido");
  } else {
    console.log("Credenciais inválidas");
  }
}
