import { alertActions } from "../action-types";

export const alerts = (state = { isError: false }, action = { type: "" }) => {
  switch (action.type) {
    case alertActions.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message,
        isError: false,
      };

    case alertActions.ERROR:
      return {
        type: 'alert-warning',
        message: action.message,
        isError: true,
      };

    case alertActions.CLEAR:
      return {
        isError: false
      };

    default:
      return state
  }
}
