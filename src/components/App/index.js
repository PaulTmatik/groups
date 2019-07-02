import React, { Component } from "react";
import { connect } from "react-redux";

import Dropdown from "../Dropdown";
import PeriodCalendar from "../PeriodCalendar";
import GroupCard from "../GroupCard";

class App extends Component {

  render() {
    const { period, groups } = this.props;
    return (
      <div>
        <h1>Hello, Groups</h1>
        <Dropdown caption={period}>
          <PeriodCalendar />
        </Dropdown>
        <span>{String(period)}</span>
        {groups.map(group => (
          <GroupCard
            key={group.guid}
            name={group.getNameFromDate(period.end)}
            guid={group.guid}
            studentsCount={group.studentsCount}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  period: state.period,
  groups: state.groups
})

export default connect(mapStateToProps)(App);
