import React, { Component } from 'react';
import LoginIcon from '../../Images/LoginIcon.png';
import TextField from 'material-ui/TextField';
import Close from './Close';
import { Link, Redirect } from 'react-router-dom';
import './style/styles.css';

const style = {
  tstyle: { height: 50 },
  floatstyle: { top: 16 },
  inputstyle: { marginTop: 4 }
}

class Login extends Component {
  constructor() {
    super();
    this.state = {
      redirectDashboard: null,
      redirecthome: null
    };
  }

  login = () => {
    this.setState({
      redirectDashboard: `/dashboard`
    })
  }

  close = () => {
    this.setState({
      redirecthome: `/`
    })
  }

  render() {
    let { redirectDashboard, redirecthome } = this.state;

    if (redirectDashboard) {
      return <Redirect to={redirectDashboard} />;
    }

    if (redirecthome) {
      return <Redirect to={redirecthome} />;
    }
    return (
      <div className="loginform-wrapper">
        <div className="loginform">
          <div className="loginIcon">
            <img src={LoginIcon} alt="LoginIcon" />
            <p>Login</p>
          </div>
          <div className="loginInput">
            <TextField
              floatingLabelText="Email address"
              className="emailAddr steps_input"
              fullWidth
              style={style.tstyle}
              floatingLabelStyle={style.floatstyle}
              inputStyle={style.inputstyle}
            />
            <TextField
              floatingLabelText="Password"
              type="password"
              className="Psw steps_input"
              autoComplete="current-password"
              fullWidth
              style={style.tstyle}
              floatingLabelStyle={style.floatstyle}
              inputStyle={style.inputstyle}
            />
          </div>
          <div className="loginbtn">
            <button className="button red submit-btn" onClick={this.login}>Login</button>
            <div className="forgotLink">
              <Link to="/login/forgotpassword">Forgot Password?</Link>
            </div>
          </div>
          <Close onClick={() => this.close()} />
        </div>
      </div>
    );
  }
}

export default Login;