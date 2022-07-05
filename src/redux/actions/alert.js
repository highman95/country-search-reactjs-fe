import { alertActions } from "../action-types";

export function success(message) {
  return {
    type: alertActions.SUCCESS,
    message
  }
}

export function error(message) {
  return {
    type: alertActions.ERROR,
    message
  }
}

export function clear() {
  return {
    type: alertActions.CLEAR
  }
}
