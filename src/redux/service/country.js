import { baseUrl, headers } from "../api";
import { handleResponse } from "./user";

export function getCountriesByName(name) {
  return fetch(`${baseUrl}/api/v1/countries/name/${name}`, {
    headers: headers()
  }).then(handleResponse)
    .then(countries => countries.data);
}
