import React, { Component } from 'react';
import update from 'react-addons-update';
import TimePicker from 'material-ui/TimePicker';
import ServiceTScrollbar from './ServiceTScrollbar';

class TueServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedkey: -1,
      tueDetails: [{
        id: 1,
        nameService: 'Name of the service lorem ipsum 123'
      }, {
        id: 2,
        nameService: 'Name of the service lorem ipsum 123'
      }, {
        id: 3,
        nameService: 'Name of the service lorem ipsum 123'
      }]
    }
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleHover(key) {
    this.setState({
      selectedkey: key
    })
  }

  handleRemove() {
    if (this.state.selectedkey < 0) {
      return;
    }
    this.setState({
      tueDetails: update(this.state.tueDetails, {
        $splice: [[this.state.selectedkey, 1]]
      }),
      selectedkey: -1
    });
  }
  render() {
    const { tueDetails } = this.state;
    const { style } = this.props;
    return (
      <div className="TueServices border2 serviceDays">
        <div className="st-title">
          <p className="red-color">Tuesday Services</p>
          <button className="btn-red">Save</button>
        </div>
        <div className="tue-topdetail">
          <div className="nameService-detail p20">
            <input className="form-control" type="text" defaultValue="Name of the service lorem ipsum 123" id="example-text-input" />
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
                tueDetails.map((tueDetail, i) =>
                  <TueDetail
                    key={i}
                    nameService={tueDetail.nameService}
                    onMouseEnter={() => this.handleHover(i)}
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

class TueDetail extends Component {
  render() {
    const { nameService, onMouseEnter, onRemove, style } = this.props;
    return (
      <div className="tue-detail st-card-detail" onMouseEnter={onMouseEnter} onClick={onMouseEnter} >
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

export default TueServices;