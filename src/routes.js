import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Pages
import HomePage from './pages/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
// import Verify from './pages/Auth/Verify';
// import ForgotPassword from './pages/Auth/ForgotPassword';
// import ResetPassword from './pages/Auth/ResetPassword';

const Wrapper = styled.div`
  height: 100%;
  margin: 0;
`;

const Routes = () => (
  <Router>
    <Wrapper>
      <Switch>
        <Route
          exact
          path="/"
          component={HomePage}
        />

        <Route
          exact
          path="/login"
          component={Login}
        />

        <Route
          exact
          path="/register"
          component={Register}
        />

        {/* <Route
          exact
          path="/verify"
          component={Verify}
        /> */}

        {/* <Route
          exact
          path="/forgot-password"
          component={ForgotPassword}
        /> */}

        {/* <Route
          exact
          path="/reset-password"
          component={ResetPassword}
        /> */}
      </Switch>
      <ToastContainer
        autoClose={3500}
      />
    </Wrapper>
  </Router>
);

export default Routes;