import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../features/auth/containers/PrivateRoute';
// import Login from '../features/auth/login/LoginPage';
import LoginPage2 from '../features/auth/login/LoginPage2';
import Register from '../features/auth/register/RegisterPage';
import DashboardPage from '../features/dashboard/DashboardPage';
import HomePage from '../features/home/HomePage';

const RouterManager = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <PrivateRoute path="/dashboard" exact component={DashboardPage} />
          <Route path="/login" exact component={LoginPage2} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Router>
    </>
  );
};

export default RouterManager;
