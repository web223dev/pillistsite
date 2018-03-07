import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import ForgotPsw from './Pages/Login/forgotpsw';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import UserProfile from './Pages/UserProfile';
import UserManagement from './Pages/UserManagement';
// import UserManagement from './Pages/UserManagement';
import GivingHistory from './Pages/GivingHistory';
import Settings from './Pages/Settings';
import MembershipEdit from './Pages/Settings/Membership/MembershipEdit';
import GivingHistoryDetail from './Pages/GivingHistory/GivingHistoryDetail';

class App extends Component {
  render() {
    return (
      <div className="container-fulid">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/login/forgotpassword" component={ForgotPsw} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard/user_mangement" component={UserManagement} />
          {/* <Route exact path="/dashboard/user_mangement" component={UserManagement} />           */}
          <Route exact path="/dashboard/givinghistory" component={GivingHistory} />
          <Route exact path="/dashboard/user_profile" component={UserProfile} />
          <Route exact path="/dashboard/settings/:name" component={Settings} />
          <Route exact path="/dashboard/settings/profile/:name" component={Settings} />
          <Route exact path="/dashboard/settings/membership/edit" component={MembershipEdit} />
          <Route exact path={`/dashboard/givinghistory/:action`} component={GivingHistoryDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;