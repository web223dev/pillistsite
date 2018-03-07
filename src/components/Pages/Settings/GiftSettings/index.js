import React, { Component } from 'react';
import GiftDatas from './GiftDatas';
import GiftOption from './GiftOption';
import InActiveGiftOption from './InActiveGiftOption';
import update from 'react-addons-update';
import Modal from "react-responsive-modal";

import '../style/GiftSettings.css';

const modalstyle = {
  overlay: {
    background: 'linear-gradient(180deg,rgba(255,140,102,.9) 0,rgba(255,140,102,.9) 0,rgba(255,241,216,.9) 52%,rgba(255,143,112,.9))',
    alignItems: 'flex-start',
    paddingTop: '158px'
  },
  modal: {
    padding: '50px 0px',
    borderRadius: '30px',
    width: '504px',
    textAlign: 'center'
  }
};

class GiftSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedkey: -1,
      selectedrmkey: -2,
      gDatas: GiftDatas,
      goptionName: '',
      goptionState: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeActive = this.handleChangeActive.bind(this);
    this.handlermClick = this.handlermClick.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeOption = this.handleChangeOption.bind(this);
  }

  handleCreate() {
    const newgiftdata = {
      index: this.state.gDatas.length - 1,
      giftOptName: this.state.goptionName,
      activeStatus: this.state.goptionState
    }
    this.setState({
      gDatas: update(this.state.gDatas, {
        $push: [newgiftdata]
      }),
      open: false
    });
  }

  handleClick(key) {
    var newkey = -3;
    this.state.gDatas.map((giftData, i) => {
      if (giftData.index === key) {
        return newkey = i;
      } else {
        return newkey;
      }
    });
    this.setState({
      selectedkey: newkey
    })
  }

  handlermClick(key) {
    var newkey = -3;
    this.state.gDatas.map((giftData, i) => {
      if (giftData.index === key) {
        return newkey = i;
      } else {
        return newkey;
      }
    });
    this.setState({
      gDatas: update(this.state.gDatas, {
        $splice: [[newkey, 1]]
      })
    });
  }

  handleChangeActive(newactive) {
    this.setState({
      gDatas: update(this.state.gDatas, {
        [this.state.selectedkey]: {
          'activeStatus': { $set: newactive }
        }
      })
    });
  }

  handleChangeName(e) {
    this.setState({
      goptionName: e.target.value
    });
  }
  handleChangeOption() {
    this.setState({ goptionState: !this.state.goptionState })
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };


  render() {
    const mapGiftData = (data) => {
      var activeData, inactiveData = {};
      activeData = data.filter((content) => {
        return content.activeStatus === true;
      });
      inactiveData = data.filter((content) => {
        return content.activeStatus === false;
      });
      // console.log("aData", activeData);
      // console.log("iData", inactiveData);
      return (
        <div>
          <GiftOption
            aDatas={activeData}
            handleClick={this.handleClick}
            handleChangeActive={this.handleChangeActive}
          />
          <InActiveGiftOption
            iDatas={inactiveData}
            handleClick={this.handleClick}
            handleChangeActive={this.handleChangeActive}
            handlermClick={this.handlermClick}
          />
        </div>
      )
    };

    const { gDatas, open } = this.state;
    return (
      <div className="giftSetting">
        <div className="gs-paymentgs">
          <div className="card card-w">
            <div className="card-header card-white">
              <div className="title">
                <p>Payment Gateaway Settings</p>
              </div>
            </div>
            <div className="card-block">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non metus elementum nibh aliquet fringilla. Aliquam rhoncus elit eu dui mollis efficitur ac a metus. In viverra augue ante, a egestas tellus tempus a. Vivamus gravida urna vitae rutrum dapibus. Curabitur facilisis fermentum sapien.</p>
              <div className="pgs-detail">
                <p className="red-color">Status: Active</p>
                <p className="red-color">Account Start Date: 7/1/17</p>
              </div>
              <button className="btn-red">Launch Partner Site</button>
            </div>
          </div>
        </div>
        <div className="gift-wrapper">
          <div className="gift-addBtn">
            <button className="btn-gray" onClick={this.onOpenModal}>Enter new gift option</button>
            <Modal
              open={open}
              onClose={this.onCloseModal}
              styles={modalstyle}
              showCloseIcon={false}
              little>
              <div className="go-vault-modal">
                <div className="form-group go_enter_newOption">
                  <div className="gon_name">
                    <label htmlFor="giftname">Gift Name:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      onChange={this.handleChangeName}
                      placeholder="Enter New Gift Name"
                      id="example-text-input" />
                  </div>
                  <div className="gon_state">
                    <p>Active:</p>
                    <input
                      type="checkbox"
                      id="gswitch"
                      onChange={this.handleChangeOption}
                    />
                    <label htmlFor="gswitch">Toggle</label>
                  </div>
                </div>
                <button className="button border--red neutral go-yesbtn" onClick={this.handleCreate}>Submit</button>
                <button className="button border--red neutral go-nobtn" onClick={this.onCloseModal}>Cancel</button>
              </div>
            </Modal>
          </div>
          {mapGiftData(gDatas)}
        </div>
      </div>
    );
  }
}

export default GiftSettings;