import { getJSON, postJSON } from '@/services/httpClienteService';

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