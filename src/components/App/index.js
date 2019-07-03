import React, { Component } from "react";
import { connect } from "react-redux";

import Dropdown from "../Dropdown";
import PeriodCalendar from "../PeriodCalendar";
import GroupCard from "../GroupCard";

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
    const { location, groups, period } = this.props;
    const lastLocation = location.slice(-1)[0];
    switch (lastLocation.name) {
      case "list":
        return (
          <div className="page">
            {groups.map(group => (
              <GroupCard
                key={group.guid}
                name={group.getNameFromDate(period.end)}
                guid={group.guid}
                startedAt={group.startedAt}
                endedIn={group.endedIn}
                studentsCount={group.studentsCount}
                onClick={() => this.handleLocationChange(group.guid)}
              />
            ))}
          </div>
        );
      case "detail":
        return (
          <div className="page">
            {lastLocation.param}
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
}

const mapStateToProps = state => ({
  period: state.period,
  groups: state.groups,
  location: state.location
})

export default connect(mapStateToProps)(App);
