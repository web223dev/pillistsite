import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Thanks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect_dashboard: null
    };
  }

  ndashboard = () => {
    this.setState({
      redirect_dashboard: `/dashboard`
    })
  }

  render() {
    const { redirect_dashboard } = this.state;
    if (redirect_dashboard) {
      return <Redirect to={redirect_dashboard} />;
    }
    return (
      <div className="thanks">
        <h3>Thanks! We just sent you a confirmation email.</h3>
        <div className="thx-text">
          <p>just go to your email inbox, look out for the email, and click on the confirmation link.</p>
          <p>Then your all set! Do keep a look out, because the confirmation email might end uip in your spam folder</p>
        </div>
        <button className="btn-red" onClick={this.ndashboard}>OK</button>
      </div>
    );
  }
}

export default Thanks;