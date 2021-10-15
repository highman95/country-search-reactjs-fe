import { alertActions } from "../action-types";

export function alert() {
  return {
    success,
    error,
    clear
  }

  function success(message) { return { type: alertActions.SUCCESS, message } }
  function error(message) { return { type: alertActions.ERROR, message } }
  function clear() { return { type: alertActions.CLEAR } }
}
