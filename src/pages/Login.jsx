import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate, logout } from '../redux/actions/user';
import "./Login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const { username, password } = credentials;
  const loggingIn = useSelector(state => state.users0.loggingIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());// reset login status
  }, [dispatch]);

  useEffect(() => {
    setSubmitted(false);
  }, [loggingIn]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCredentials(credentials => ({
      ...credentials,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    if (username && password) {
      dispatch(authenticate(username, password));
    }
  }

  return (
    <div className="col-lg-4 offset-lg-2x">
      <h2>Login</h2>

      <main className="form-signin">
        <form name="form" onSubmit={handleSubmit}>
          <div className="form-floating">
            <input
              type="email" id="floating-username"
              className={`form-control ${submitted && !username ? 'is-invalid' : ''}`}
              name="username"
              value={username}
              onChange={handleChange} disabled={submitted}
              placeholder="john.doe@example.com"
            />
            <label htmlFor="floating-username">Username</label>
            {submitted && !username &&
              <div className="invalid-feedback">Username is required</div>
            }
          </div>

          <div className="form-floating">
            <input
              type="password" id="floating-password"
              className={`form-control ${submitted && !password ? 'is-invalid' : ''}`}
              name="password"
              value={password}
              onChange={handleChange} disabled={submitted}
              placeholder="Password"
            />
            <label htmlFor="floating-password">Password</label>
            {submitted && !password &&
              <div className="invalid-feedback">Password is required</div>
            }
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
            Sign in
          </button>
        </form>
      </main>

      {/* <form name="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            className={'form-control' + (submitted && !username ? ' is-invalid' : '')}
          />
          {submitted && !username &&
            <div className="invalid-feedback">Username is required</div>
          }
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={'form-control' + (submitted && !password ? ' is-invalid' : '')}
          />
          {submitted && !password &&
            <div className="invalid-feedback">Password is required</div>
          }
        </div>
        <div className="form-group">
          <button className="btn btn-primary">
            {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
            Login
          </button>
        </div>
      </form> */}
    </div>
  );
}

export default Login;
