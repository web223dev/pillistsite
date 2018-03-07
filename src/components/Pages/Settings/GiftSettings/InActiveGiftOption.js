import React, { Component } from 'react';
import GiftScrollbar from './GiftScrollbar';

class InActiveGiftOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.ChangeActive = this.ChangeActive.bind(this);
  }

  ChangeActive() {
    this.props.handleChangeActive(this.state.isChecked)
  }

  handleChange() {
    this.setState({ isChecked: true })
  }

  render() {
    const { iDatas, handleClick, handlermClick } = this.props;
    const idetail = (iDs) => {
      return iDs.map((iData, i) => {
        return (
          // <li key={i} onMouseOver={() => handlermClick(iData.index)} onClick={() => handlermClick(iData.index)}>
          <li key={i} >
            <button onClick={() => handlermClick(iData.index)}><i className="fas fa-trash-alt"></i></button>
            <p>{iData.giftOptName}</p>
          </li>
        )
      })
    }
    const iactive = (iDs) => {
      return iDs.map((iData, i) => {
        return (
          <li key={i} onClick={() => handleClick(iData.index)}>
            <input
              type="checkbox"
              id={"inact_switch" + iData.index}
              checked={iData.activeStatus}
              onClick={this.ChangeActive}
              onChange={this.handleChange}
            />            
            <label htmlFor={"inact_switch" + iData.index}>Toggle</label>
          </li>
        )
      }
      )
    }

    return (
      <div className="inActive-giftOption">
        <div className="card card-w">
          <div className="card-header card-white">
            <div className="title">
              <p>Inactive Gift Option</p>
            </div>
            <div className="activeStatus">
              <p>Active Status</p>
            </div>
          </div>
          <div className="card-block">
            <GiftScrollbar style={{ height: 252 }}>
              <div className="go_active_wrapper">
                <div className="go-detail">
                  <ul>
                    {idetail(iDatas)}
                  </ul>
                </div>
                <div className="go-as">
                  <ul>
                    {iactive(iDatas)}
                  </ul>
                </div>
              </div>
            </GiftScrollbar>
          </div>
        </div>
      </div>
    );
  }
}

export default InActiveGiftOption;