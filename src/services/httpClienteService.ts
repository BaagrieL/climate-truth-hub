export async function getJSON<T>(url: string, headers: Record<string, string> = {}): Promise<T> {
  const resposta = await fetch(url, {
    method: 'GET',
    headers: { 
        'Content-Type': 'application/json',
        ...headers 
    },
  });

  if (!resposta.ok) {
    const erro = await resposta.json();
    throw new Error(erro.error || 'Erro na requisição GET');
  }

  return resposta.json();
}

export async function postJSON<TResponse, TBody>(
  url: string,
  data: TBody,
  headers: Record<string, string> = {}
): Promise<TResponse> {
  const resposta = await fetch(url, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json', 
      ...headers 
    },
    body: JSON.stringify(data),
  });

  if (!resposta.ok) {
    const erro = await resposta.json();
    throw new Error(erro.error || 'Erro na requisição POST');
  }

  return resposta.json();
}
