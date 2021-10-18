import * as appSec from "../crypto";

export const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://country-search-desk.herokuapp.com' : 'http://localhost:3502';

export function headers() {
  const { token } = appSec.decryptAndReturn() || {};
  const headers = {
    'Content-Type': 'application/json',
  };

  return token ? {
    ...headers,
    'Authorization': 'Bearer ' + token
  } : headers;
}
