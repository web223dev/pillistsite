import React, { Component } from 'react';
import CloseIcon from '../../Images/close-x.png';

export default class Close extends Component {
  render() {
    return (
      <div className="closeIcon" onClick={this.props.onClick} >
        <img src={CloseIcon} alt="CloseIcon"/>
      </div>
    );
  }
}