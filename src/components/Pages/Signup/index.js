import React, { Component } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import Thanks from './Thanks';
import { Link } from 'react-router-dom';

import './style/styles.css';

const steps = [{
  id: 1,
  stepTitle: 'Please tell us about your church'
}, {
  id: 2,
  stepTitle: 'Tell us more!'
}, {
  id: 3,
  stepTitle: 'Great! Now let`s create your admin account.'
}]

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0
    }
    this.handleChangeStep = this.handleChangeStep.bind(this);
    this.handleSelectPage = this.handleSelectPage.bind(this);
    // this.goBack = this.goBack.bind(this);
  }

  handleChangeStep() {
    this.setState({
      currentStep: this.state.currentStep + 1
    })
  }

  handleSelectPage(i) {
    if(this.state.currentStep <= i ){
      return;
    }  
    this.setState({
      currentStep: i
    });
  }

  // goBack() {
  //   this.props.history.push('/');
  // }

  render() {
    const { currentStep } = this.state;
    const mapStepComponent = (step) => {
      switch (step) {
        case 0:
          return <StepOne changeStep={this.handleChangeStep} />
        case 1:
          return <StepTwo changeStep={this.handleChangeStep} />
        case 2:
          return <StepThree changeStep={this.handleChangeStep} />
        default:
          return <StepOne changeStep={this.handleChangeStep} />
      }
    }

    return (
      <div className="signup customBackground">
        <div className="back">
          {/* <button onClick={this.goBack}><i className="fa fa-angle-left" aria-hidden="true"></i> back</button> */}
          <Link to="/"><i className="fa fa-angle-left" aria-hidden="true"></i> back</Link>
        </div>
        <div className="signup_form first">
          {
            currentStep === 3 ?
              <Thanks /> :
              <div className="su-steps">
                <div className="wrap--step-num first">
                  {
                    steps.map((step, i) => {
                      const background = (currentStep === i) ? { background: '#ff8361' } : null;
                      const numstyle = (currentStep === i) ? { color: '#fff' } : null;
                      return (
                        <div className="list-num"  onClick={() => this.handleSelectPage(i)} style={background} key={i}>
                          <p style={numstyle}>{step.id}</p>
                        </div>
                      );
                    }
                    )
                  }
                  {
                    steps.map((step, i) => {
                      if (currentStep === i) {
                        return (
                          <p key={i} className="title--step-num">{step.stepTitle}</p>
                        );
                      } else {
                        return null;
                      }
                    }
                    )
                  }
                </div>
                <div className="signup_form--bottom">
                  <div className="wrap--signup-img">
                    <div className="signup-phone">
                    </div>
                  </div>
                  <div className="wrap-form first">
                    {mapStepComponent(currentStep)}
                  </div>
                </div>
              </div>
          }
        </div>
      </div>
    );
  }
}

export default Signup;