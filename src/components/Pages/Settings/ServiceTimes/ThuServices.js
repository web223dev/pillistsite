import React, { Component } from 'react';
import update from 'react-addons-update';
import TimePicker from 'material-ui/TimePicker';
import ServiceTScrollbar from './ServiceTScrollbar';

class ThuServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedkey: -1,
      thuDetails: [{
        id: 1,
        nameService: 'Name of the service lorem ipsum 123',
      }, {
        id: 2,
        nameService: 'Name of the service lorem ipsum 123',
      }]
    }
    this.handleCreate = this.handleCreate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleCreateClick = this.handleCreateClick.bind(this);
  }

  handleClick(key) {
    this.setState({
      selectedkey: key
    })
  }

  handleCreateClick() {
    const contact = {
      nameService: 'Name of the service lorem ipsum 123'
    }
    this.handleCreate(contact);
  }

  handleCreate(contact) {
    this.setState({
      thuDetails: update(this.state.thuDetails, {
        $push: [contact]
      })
    });
  }
  handleRemove() {
    if (this.state.selectedkey < 0) {
      return;
    }
    this.setState({
      thuDetails: update(this.state.thuDetails, {
        $splice: [[this.state.selectedkey, 1]]
      }),
      selectedkey: -1
    });
  }

  render() {
    const { thuDetails } = this.state;
    const { style } = this.props;
    return (
      <div className="thuServices border2 serviceDays">
        <div className="st-title">
          <p className="red-color">Thursday Services</p>
          <button className="btn-red" onClick={this.handleCreateClick}>+ Add New Service</button>
        </div>
        <div className="card">
          <ServiceTScrollbar style={{ height: 252 }}>
            <div className="card-header card-white">
              <div className="title">
                <p>Name of the service</p>
              </div>
              <div className="startTime st-border">
                <p>Start Time</p>
              </div>
              <div className="endTime st-border">
                <p>End Time</p>
              </div>
              <div className="action st-border">
                <p>Action</p>
              </div>
            </div>
            <div className="card-block">
              {
                thuDetails.map((thuDetail, i) =>
                  <ThursdayDetail
                    key={i}
                    nameService={thuDetail.nameService}
                    onMouseOver={() => this.handleClick(i)}
                    onRemove={this.handleRemove}
                    style={style}
                  />
                )
              }
            </div>
          </ServiceTScrollbar>
        </div>
      </div>
    );
  }
}

class ThursdayDetail extends Component {
  render() {
    const { nameService, onMouseOver, onRemove, style } = this.props;
    return (
      <div className="thu-detail st-card-detail" onMouseOver={onMouseOver} onClick={onMouseOver}>
        <div className="nameService-detail p20">
          <input className="form-control" type="text" defaultValue={nameService} id="example-text-input" />
        </div>
        <div className="startTime p20">
          <TimePicker
            hintText="00:00AM"
            autoOk={true}
            textFieldStyle={style}
            dialogStyle={style}
            className="TimePicker"
          />
        </div>
        <div className="endTime p20">
          <TimePicker
            hintText="00:00AM"
            autoOk={true}
            textFieldStyle={style}
            className="TimePicker"
          />
        </div>
        <div className="action p20">
          <button onClick={onRemove}><i className="fas fa-trash-alt"></i></button>
        </div>
      </div>
    );
  }
}

export default ThuServices;