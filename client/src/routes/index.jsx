/* eslint-disable no-unused-vars */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/App';
import SignUp1 from '../components/Auth/SignUp/SignUp1';
import SignUp2 from '../components/Auth/SignUp/SignUp2';
import UserManagement from '../components/pages/UserManagement';
import CardForm from '../components/pages/Card';
import Welcome from '../components/Welcome/Welcome';
import SignIn from '../components/Auth/SignIn/SignIn';

const Routes = () => (
  <BrowserRouter>
    <>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/signing" component={SignIn} />
      <Route exact path="/signup1" component={SignUp1} />
      <Route exact path="/signup2" component={SignUp2} />
      <Route exact path="/dashboard" component={App} />
      {/* <App> */}
      {/* <Switch> */}
      {/* <Route exact path="/features" component={Features} /> */}
      {/* <Route exact path="/tos" component={TermsOfService} /> */}
      {/* <Route exact path="/privacy" component={PrivacyPolicy} /> */}
      {/* <Route exact path="/signout" component={SignOut} /> */}
      {/* <Route exact path="/reset" component={Reset} /> */}
      {/* <Route exact path="/newpassword/:token" component={NewPassword} /> */}

      {/* <Route exact path="/profile" component={Profile} username="me" /> */}
      {/* <Route exact path="/settings/:page?" component={Settings} /> */}
      {/* <Route exact path="/users/:page?/:id?" component={Users} /> */}
      {/* <Route exact path="/users/:id" component={User} /> */}
      {/* <Route exact path="/users/:id/edit" component={UserEdit} /> */}

      {/* <Route exact path="/:username" component={Profile} /> */}
      {/* <Route component={NoMatch} /> */}
      {/* </Switch>   */}
      {/* </App> */}
    </>
  </BrowserRouter>
);
export default Routes;
