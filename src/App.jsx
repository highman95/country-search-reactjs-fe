import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router, Redirect, Route, Switch
} from 'react-router-dom';
import './App.css';
import Alert from './components/Alert';
import PrivateRoute from './components/PrivateRoute';
import logo from './logo.svg';
import Login from './pages/Login';
import Search from './pages/Search';
import * as alert from './redux/actions/alert';

function App() {
  const alerts0 = useSelector(state => state.alerts0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(alert.clear());// clear alert on location change
  }, [dispatch]);

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Alert content={alerts0} />

        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Search} />
            <Route path="/login" component={Login} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
