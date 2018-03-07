import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Close from './Close';
import ResetPswIcon from '../../Images/ResetPswIcon.png';
import './style/styles.css';

const style = {
  tstyle: { height: 50 },
  floatstyle: { top: 16 },
  inputstyle: { marginTop: 4 }
}

class ForgotPsw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backLogin: null,
      redirecthome: null,
      redirectDashboard: null
    }
  }

  back = () => {
    this.setState({
      backLogin: `/login`
    })
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
    let { backLogin, redirecthome, redirectDashboard } = this.state;

    if (redirectDashboard) {
      return <Redirect to={redirectDashboard} />;
    }
    if (backLogin) {
      return <Redirect to={backLogin} />
    }
    if (redirecthome) {
      return <Redirect to={redirecthome} />;
    }
    return (
      <div className="forgotpsw-wrapper">
        <div className="forgotpswform">
          <div className="resetPswIcon">
            <img src={ResetPswIcon} alt="ResetPswIcon" />
            <p>Reset Password</p>
          </div>
          <div className="resetPswInput">
            <TextField
              floatingLabelText="Email address"
              className="emailAddr steps_input"
              fullWidth
              style={style.tstyle}
              floatingLabelStyle={style.floatstyle}
              inputStyle={style.inputstyle}
            />
          </div>
          <div className="loginbtn">
            <button className="button red submit-btn" onClick={this.login}>Submit</button>
          </div>
          <Close onClick={() => this.close()} />
          <span className="back-icon" onClick={this.back}>
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    );
  }
}

export default ForgotPsw;