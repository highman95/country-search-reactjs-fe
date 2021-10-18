import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import * as appSec from '../redux/crypto';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        appSec.decryptAndReturn() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
              }
            }}
          />
        )
      )}
    />
  );
}

export default PrivateRoute;
