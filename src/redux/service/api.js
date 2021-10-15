export const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://country-search-desk.herokuapp.com' : 'http://localhost:3502';

export function headers() {
  const { token } = JSON.parse(localStorage.getItem('user')) || {};
  const headers = {
    'Content-Type': 'application/json',
  };

  return token ? {
    ...headers,
    'Authorization': 'Bearer ' + token
  } : headers;
}
