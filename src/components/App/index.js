import React, { Component } from "react";
import { connect } from "react-redux";

import Dropdown from "../Dropdown";
import PeriodCalendar from "../PeriodCalendar";

import ListPage from "../../pages/List";
import GroupDetail from "../../pages/Detail";

import { changeLocation, goBack } from "../../actions";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isModalShown: false
    }
  }

  render() {
    const { period } = this.props;
    const backButton = this.canGoBack() 
      ? <button onClick={() => this.handleGoBack()}>&lt;</button> 
      : null;
    return (
      <div>
        <h1>Hello, Groups</h1>
        {backButton}
        <Dropdown caption={period}>
          <PeriodCalendar />
        </Dropdown>
        {this.getToolbar()}
        <span>{String(period)}</span>
        {this.switchLocation()}
      </div>
    );
  }

  switchLocation() {
    const curentLocation = this.getLocation();
    switch (curentLocation.name) {
      case "list":
        return <ListPage 
          isModalShown={this.state.isModalShown}
          onCloseModal={this.closeModal}
        />
      case "detail":
        return <GroupDetail group={curentLocation.param} />
      default:
        return null;
    }
  }

  closeModal = () => {
    this.setState({isModalShown: false});
  }

  openModal = () => {
    this.setState({isModalShown: true});
  }

  getToolbar() {
    const curentLocation = this.getLocation();
    switch (curentLocation.name) {
      case "list":
        return (
          <div className="toolbar">
            <button onClick={this.openModal}>Добавить группу</button>
          </div>
        );
    
      default:
        return null;
    }
  }

  handleLocationChange(param) {
    const { dispatch } = this.props;
    dispatch(changeLocation("detail", param));
    return;
  }

  canGoBack() {
    const { location } = this.props;
    return location.length > 1;
  }
  
  handleGoBack(param = null) {
    const { dispatch } = this.props;
    dispatch(goBack(param));
    return;
  }

  getLocation() {
    const { location } = this.props;
    return location.slice(-1)[0];
  }
}

const mapStateToProps = state => ({
  period: state.period,
  groups: state.groups,
  location: state.location
})

export default connect(mapStateToProps)(App);
