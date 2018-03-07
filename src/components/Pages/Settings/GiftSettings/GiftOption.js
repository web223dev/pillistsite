import React, { Component } from 'react';
import GiftScrollbar from './GiftScrollbar';
import PropTypes from 'prop-types';

const propTypes = {
  handleChangeActive: PropTypes.func
}

const defaultProps = {
  aDatas: {
    index: -1,
    giftOptName: '',
    activeStatus: true
  },
  handleChangeActive: () => { console.error('handleChangeActive is not defined') },
}

class GiftOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.ChangeActive = this.ChangeActive.bind(this);
  }

  ChangeActive() {
    this.props.handleChangeActive(this.state.isChecked)
  }

  handleChange() {
    this.setState({ isChecked: false })
  }

  render() {
    const { aDatas, handleClick } = this.props;
    return (
      <div className="giftOption">
        <div className="card card-w">
          <div className="card-header card-white">
            <div className="title">
              <p>Gift Option</p>
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
                    {
                      aDatas.map((aData, i) =>
                        <li key={i}>{aData.giftOptName}</li>
                      )
                    }
                  </ul>
                </div>
                <div className="go-as">
                  <ul>
                    {
                      aDatas.map((aData, i) => {
                        return (
                          // <li key={i} onMouseOver={() => handleClick(aData.index)} onClick={() => handleClick(aData.index)}>
                          <li key={i} onClick={() => handleClick(aData.index)}>
                            <input
                              type="checkbox"
                              id={"switch" + aData.index}
                              checked={aData.activeStatus}
                              onClick={this.ChangeActive}
                              onChange={this.handleChange}
                            />
                            <label htmlFor={"switch" + aData.index}>Toggle</label>
                          </li>
                        )
                      }
                      )
                    }
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

GiftOption.propTypes = propTypes;
GiftOption.defaultProps = defaultProps;

export default GiftOption;