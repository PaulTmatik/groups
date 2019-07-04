import React, { Component } from "react";
import { connect } from "react-redux";

class GroupDetail extends Component {
  render() {
    const { group, period } = this.props;
    const originalGroupName = !period.isCurrent()
      ? <div>Текущее имя группы {group.getNameFromDate(new Date())}</div> 
      : null;
    return (
      <div className="page">
        <h1>{group.getNameFromDate(period.end)}</h1>
        {originalGroupName}
        {group.guid}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  period: state.period
});

export default connect(mapStateToProps)(GroupDetail);
