import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as alertReducer from './reducer/alert';
import * as userReducer from './reducer/user';

export const store = createStore(
  combineReducers({
    alerts0: alertReducer.alerts,
    users0: userReducer.users,
  }),
  applyMiddleware(
    thunkMiddleware,
  )
);
