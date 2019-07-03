import React, { Component } from "react";
import { connect } from "react-redux";

import Dropdown from "../Dropdown";
import PeriodCalendar from "../PeriodCalendar";

import ListPage from "../../pages/List";
import GroupDetail from "../../pages/Detail";

import { changeLocation, goBack } from "../../actions";

class App extends Component {

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
        <span>{String(period)}</span>
        {this.switchLocation()}
      </div>
    );
  }

  switchLocation() {
    const { location } = this.props;
    const lastLocation = location.slice(-1)[0];
    switch (lastLocation.name) {
      case "list":
        return <ListPage />
      case "detail":
        return <GroupDetail group={lastLocation.param} />
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
}

const mapStateToProps = state => ({
  period: state.period,
  groups: state.groups,
  location: state.location
})

export default connect(mapStateToProps)(App);
