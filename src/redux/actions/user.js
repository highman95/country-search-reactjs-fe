import { userActions } from "../action-types";
import {
  authenticate as authenticationService,
  logout as logoutService
} from "../service/user";
import { alert } from "./alert";

export function authenticate(username, password) {
  return dispatch => {
    dispatch(request({ username }));

    authenticationService(username, password)
      .then(user => {
        dispatch(success(user));
      }, error => {
        dispatch(failure(error.toString()));
        dispatch(alert().error(error?.toString()));
      });
  };

  function request(user) { return { type: userActions.LOGIN_REQUEST, payload: user } }
  function success(user) { return { type: userActions.LOGIN_SUCCESS, payload: user } }
  function failure(error) { return { type: userActions.LOGIN_FAILURE, error } }
}

export function logout() {
  logoutService();
  return { type: userActions.LOGOUT };
}
