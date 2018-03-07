import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

class GiftScrollbar extends Component{
  showingVertical({ style, ...props }) {
    const thumbStyle = {
      right: '2px',
      bottom: '10px',
      top: '2px',
      borderRadius: '3px'
    };
    return (
      <div
        style={{ ...style, ...thumbStyle }}
        {...props} />
    );
  }
  
  render() {
    return (
      <Scrollbars
        renderTrackVertical={this.showingVertical}        
        {...this.props} />
    );
  }
}

export default GiftScrollbar;