import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Alert from './components/Alert';
import PrivateRoute from './components/PrivateRoute';
import logo from './logo.svg';
import Login from './pages/Login';
import Search from './pages/Search';
import { alert } from './redux/actions/alert';
import { history } from './redux/history';

function App() {
  const alerts0 = useSelector(state => state.alerts0);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      dispatch(alert().clear());// clear alert on location change
    });
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Alert content={alerts0} />

        <Router history={history}>
          <Switch>
            <PrivateRoute exact path="/" component={Search} />
            <Route path="/login" component={Login} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
