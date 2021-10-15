import { countryActions } from "../action-types";

const initialState = {
  loading: false,
  countries: [],
}

export const countries = (state = initialState, action) => {
  switch (action.type) {
    case countryActions.SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case countryActions.SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: action.payload,
      };

    case countryActions.SEARCH_FAILURE:
    case countryActions.SEARCH_CLEARED:
      return {
        ...state,
        loading: false,
        countries: []
      };

    default:
      return state;
  }
}
