const API_BASE_URL = "https://randomuser.me/api/"; //TODO: Move to env

type ApiOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
};

async function apiFetch<T>(
  endpoint: string,
  options: ApiOptions = {}
): Promise<T> {
  const { body, ...restOptions } = options;

  const config: RequestInit = {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...restOptions,
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

  if (!response.ok) {
    console.error("response", response);
    const errorData = await response
      .json()
      .catch(() => ({ message: "Error en la petición a la API" }));
    console.error("API Error:", errorData);
    throw new Error(
      errorData.message || `Error ${response.status}: ${response.statusText}`
    );
  }

  return response.json() as Promise<T>;
}

export const apiClient = {
  get: <T>(endpoint: string, options?: ApiOptions) =>
    apiFetch<T>(endpoint, { ...options, method: "GET" }),

  post: <T, P>(endpoint: string, body: P, options?: ApiOptions) =>
    apiFetch<T>(endpoint, { ...options, method: "POST", body }),
};
