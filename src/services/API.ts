const API_ROOT = 'https://api.hnpwa.com/v0/'

export const API = <T>(url: string, config: RequestInit = {}): Promise<T> => {
  return fetch(`${API_ROOT}${url}`, {
    method: 'GET',
    ...config
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json() as Promise<T>
  })
}
