import { countryActions } from "../action-types";
import * as countryService from "../service/country";
import { alert } from "./alert";

export function getCountriesByName(name) {
  return dispatch => {
    dispatch(request({ name }));

    countryService.getCountriesByName(name)
      .then(countries => {
        dispatch(success(countries));
      }, error => {
        dispatch(failure(error.toString()))
        dispatch(alert().error(error?.toString()));
      })
  }

  function request(query) { return { type: countryActions.SEARCH_REQUEST, payload: query } }
  function success(countries) { return { type: countryActions.SEARCH_SUCCESS, payload: countries } }
  function failure(error) { return { type: countryActions.SEARCH_FAILURE, error } }
}
