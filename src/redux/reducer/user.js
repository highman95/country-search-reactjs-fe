import { userActions } from "../action-types";

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? {
  loggedIn: true, user
} : {};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case userActions.LOGIN_REQUEST:
      return {
        loggingIn: true,
      };

    case userActions.LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        user: action.payload,
      };

    case userActions.LOGIN_FAILURE:
    case userActions.LOGOUT:
      return {
        loggingIn: false,
      };

    default:
      return state;
  }
}
