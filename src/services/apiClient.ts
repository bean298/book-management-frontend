const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error("Missing VITE_API_BASE_URL in environment variables.");
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export async function apiRequest<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers },
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}.`);
  }

  const result: ApiResponse<T> = await response.json();

  if (!result.success) {
    throw new Error(result.message || "Request failed.");
  }

  return result.data;
}
