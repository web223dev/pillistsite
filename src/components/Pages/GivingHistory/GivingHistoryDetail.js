import React, { Component } from 'react';
import DHeader from '../Dashboard/DHeader';
import DSubHeader from '../Dashboard/DSubHeader';
import DatePicker from 'react-date-picker';
import GivingHistoryLogo from '../../Images/givinghistory.png';
import gtableDatas from './gtableData';
import gdetailTableDatas from './gdetailTableData';
import TableScrollbars from './TableScrollbars';
import ShowingGivingScrollbars from './ShowingGivingScrollbars';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import './style/styles.css';
import styles from '../../../dropdownstyle';
import gtableData from './gtableData';

class GivingHistoryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromdate: new Date(),
      todate: new Date(),
      value: 1
    }
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    this.props.history.push('/dashboard/givinghistory');
  }

  handleChange = (event, index, value) => this.setState({ value });

  onFromdateChange = fromdate => this.setState({ fromdate })
  onTodateChange = todate => this.setState({ todate })

  render() {
    var selectedArray = {};
    gtableDatas.map((data, i) => {
      if (gtableDatas[i].action === this.props.match.params.action) {
        selectedArray = gtableData[i];
      }
      return selectedArray;
    })

    return (
      <div className="givinghistoryDetails customBackground">
        <DHeader />
        <DSubHeader />
        <div className="givinghistoryDetail giving-history allcard customWidth">
          <div className="back">
            <button onClick={this.goBack}><i className="fa fa-angle-left" aria-hidden="true"></i> back</button>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="title">
                <img src={GivingHistoryLogo} alt="Giving History" />
                <p>{selectedArray.fullname} Giving history</p>
              </div>
              <div className="g-title-buttons">
                <button className="g-edit-gift btn-red">Edit Gift Options</button>
                <button className="g-export-excel btn-red">Export To Excel</button>
              </div>
            </div>
            <div className="card-block g-main-detail-history">
              <div className="row">
                <div className="col-md-7 g-main-history-table">
                  <div className="g-selectDate">
                    <div className="g-from">
                      <p>From: </p>
                      <div className="datepicker">
                        <DatePicker
                          onChange={this.onFromdateChange}
                          value={this.state.fromdate}
                          calendarIcon={<i className="fas fa-calendar-alt"></i>}
                        />
                      </div>
                    </div>
                    <div className="g-to">
                      <p>To: </p>
                      <div className="datepicker">
                        <DatePicker
                          onChange={this.onTodateChange}
                          value={this.state.todate}
                          calendarIcon={<i className="fas fa-calendar-alt"></i>}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="g-main-table">
                    <TableScrollbars
                      style={{ height: 326 }}>
                      <table className="table table-bordered g-mainTable">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Giving Type</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            gdetailTableDatas.map((gdetailTableData, i) =>
                              <GivingHistoryDetailTable
                                key={i}
                                date={gdetailTableData.date}
                                givingtype={gdetailTableData.givingtype}
                                amount={gdetailTableData.amount}
                              />
                            )
                          }
                        </tbody>
                      </table>
                    </TableScrollbars>
                  </div>
                </div>
                <div className="col-md-5 g-giftOption">
                  <div className="g-gift-top-wrapper">
                    <div className="g-gift-top-left">
                      <p>Payment Options: </p>
                      <DropDownMenu
                          value={this.state.value}
                          onChange={this.handleChange}
                          autoWidth={false}
                          className="gh-opt steps_input"
                          style={dropdownStyle}
                          labelStyle={styles.labelStyle}
                          iconStyle={styles.btnStyle}
                          underlineStyle={{ border: 'none' }}
                          iconButton={dropdownIcon}
                        >
                          <MenuItem value={1} primaryText="All" />
                          <MenuItem value={2} primaryText="Every Night" />
                          <MenuItem value={3} primaryText="Weeknights" />
                          <MenuItem value={4} primaryText="Weekends" />
                          <MenuItem value={5} primaryText="Weekly" />
                        </DropDownMenu>    
                    </div>
                    <div className="g-gift-top-right">
                      <button type="button" className="btn btn-secondary">Search</button>
                    </div>
                  </div>
                  <div className="g-gift-main-wrapper">
                    <div className="g-gift-main-title">
                      <p>User Info</p>
                    </div>
                    <div className="g-gift-main">
                      <ul>
                        <li>
                          <div className="g-gift-main-detail">
                            <p>Fullname</p>
                            <span>Jane Doe</span>
                          </div>
                        </li>
                        <li>
                          <div className="g-gift-main-detail">
                            <p>Email Address</p>
                            <span>jdoe@gmail.com</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="g-gift-bottom">
                    <div className="g-gift-bottom-top">
                      <p>Showing Givings From 7/1/2012 - 7/6/2017</p>
                    </div>
                    <div className="g-gift-bottom-main">
                      <ShowingGivingScrollbars style={{ height: 190 }}>
                        <ul>
                          <li>
                            <div className="g-showgiving-detail">
                              <p>Giving Name 01</p>
                              <span>$250</span>
                            </div>
                          </li>
                          <li>
                            <div className="g-showgiving-detail">
                              <p>Giving Name 01</p>
                              <span>$250</span>
                            </div>
                          </li>
                          <li>
                            <div className="g-showgiving-detail">
                              <p>Giving Name 01</p>
                              <span>$250</span>
                            </div>
                          </li>
                          <li>
                            <div className="g-showgiving-detail">
                              <p>Giving Name 01</p>
                              <span>$250</span>
                            </div>
                          </li>
                          <li>
                            <div className="g-showgiving-detail">
                              <p>Giving Name 01</p>
                              <span>$250</span>
                            </div>
                          </li>
                        </ul>
                      </ShowingGivingScrollbars>
                    </div>
                    <div className="g-gift-bottom-bottom">
                      <span>Grand Total:</span>
                      <span>$8500</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class GivingHistoryDetailTable extends Component {
  render() {
    const { date, givingtype, amount } = this.props
    return (
      <tr>
        <td className="g-date">{date}</td>
        <td className="g-givingType">{givingtype}</td>
        <td className="g-amount">${amount}</td>
      </tr>
    );
  }
}

const dropdownIcon = (<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
  <path d="M0-.75h24v24H0z" fill="none" />
</svg>);

const dropdownStyle = {
  width: '158px',
  height: '36px',
  background: '#cfcfcf',
  borderRadius: '30px',
  paddingLeft: 16,
}

export default GivingHistoryDetail;