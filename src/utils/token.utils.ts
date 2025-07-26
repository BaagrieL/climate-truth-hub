import { RegisterCredentials } from "@/services/authService";

export function theresToken(): boolean {
  return (
    typeof window !== "undefined" && localStorage.getItem("token") !== null
  );
}

export function getToken(): string | null {
  return localStorage.getItem("token");
}

export function removeToken(): void {
  localStorage.removeItem("token");
}

export function setToken(token: string): void {
  localStorage.setItem("token", token);
}

function parseToken(token: string) {
  if (!token) {
    console.error('Token vazio');
    return null;
  }

  try {
    const payload = token.split('.')[1];
    const decoded = JSON.parse(atob(payload));
    return decoded;
  } catch (e) {
    console.error('Erro ao decodificar token:', e);
    return null;
  }
}

export function getParsedToken(): RegisterCredentials | null {
  const parsedToken = parseToken(getToken() || '');

  if (!parsedToken) {
    console.error('Token nulo');
    return null;
  }

  return parsedToken;
}
