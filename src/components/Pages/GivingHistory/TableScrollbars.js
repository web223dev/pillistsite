import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

export default class TableScrollbars extends Component {
  renderVertical({ style, ...props }) {
    const thumbStyle = {
      left: '10px',
      bottom: '30px',
      top: '74px',
      borderRadius: '3px'
    };
    return (
      <div
        style={{ ...style, ...thumbStyle }}
        {...props} />
    );
  }
  renderHorizontal({ style, ...props }) {
    const thumbStyle = {
      right: '2px',
      bottom: '2px',
      left: '20px',
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
        renderTrackVertical={this.renderVertical}
        renderTrackHorizontal={this.renderHorizontal}
        {...this.props} />
    );
  }
}