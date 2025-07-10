interface AuthResponse {
  token: string;
}

interface LoginCredentials {
  username: string;
  password: string;
}

export async function login({username, password}: LoginCredentials): Promise<string> {
  const resposta = await fetch('https://climate-truth-api.onrender.com/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });

  if (!resposta.ok) {
    const erro = await resposta.json();
    throw new Error(erro.message || 'Erro no login');
  }

  const dados: AuthResponse = await resposta.json();
  return dados.token;
}

export async function register({username, password}: LoginCredentials): Promise<JSON> {
  const resposta = await fetch('https://climate-truth-api.onrender.com/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });

  if (!resposta.ok) {
    const erro = await resposta.json();
    throw new Error(erro.message || 'Erro no registro');
  }

  return resposta.json();
}