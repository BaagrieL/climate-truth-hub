import { getJSON, postJSON } from '@/services/httpClienteService';
import { getToken, removeToken, getParsedToken } from '@/utils/token.utils';

interface LoginResponse {
  token: string;
}

interface RegisterResponse {
  message: string;
}

export interface RegisterCredentials {
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

export async function logout(): Promise<void> {
  removeToken();
}

export async function checkLogin(): Promise<boolean> {
  const token = getToken();
  if (!token) return false;
  return true;
}

export function getLoggedUser(): { username: string; role: string} | null {
  if (!getToken()) return null;

  const parsedToken = getParsedToken();

  if (!parsedToken) return null;

  const { username, role } = parsedToken;
  const user = { username, role: role || 'common' };

  return user;  
}

export function getLoggedUserRole(): string | null | undefined {
  const user = getLoggedUser();

  if (!user) return null;
  
  return user.role || null;
}

export async function register(credentials: RegisterCredentials): Promise<RegisterResponse> {
  return await postJSON<RegisterResponse, RegisterCredentials>('https://climate-truth-api.onrender.com/auth/register', credentials);
}

export async function getApiStatus(): Promise<string> {
  const status = await getJSON<string>('https://climate-truth-api.onrender.com');
  return status;
}