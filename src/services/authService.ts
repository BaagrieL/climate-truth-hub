interface LoginResponse {
  token: string;
}

interface RegisterResponse {
  message: string;
}

interface RegisterCredentials {
  username: string;
  password: string;
  role?: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

async function postJSON<T, U>(url: string, data: U): Promise<T>{
  const resposta = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (!resposta.ok) {
    const erro = await resposta.json();
    throw new Error(erro.message || 'Erro na requisição');
  }

  return resposta.json();
}

async function getJSON<T>(url: string): Promise<T> {
  const resposta = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });

  if (!resposta.ok) {
    const erro = await resposta.json();
    throw new Error(erro.message || 'Erro na requisição');
  }

  return resposta.json();
}

export async function login(credentials: LoginCredentials): Promise<string> {
  const { token } = await postJSON<LoginResponse, LoginCredentials>('https://climate-truth-api.onrender.com/auth/login', credentials);
  return token;
}

export async function register(credentials: RegisterCredentials): Promise<string> {
  const { message } = await postJSON<RegisterResponse, RegisterCredentials>('https://climate-truth-api.onrender.com/auth/register', credentials);
  return message;
}

export async function getApiStatus(): Promise<string> {
  const status = await getJSON<string>('https://climate-truth-api.onrender.com');
  return status;
}