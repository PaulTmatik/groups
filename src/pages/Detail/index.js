import React, { Component } from "react";
import { connect } from "react-redux";

import Period from "../../structures/Period";
import { getActualStudents } from "../../actions";

class GroupDetail extends Component {
  componentWillMount() {
    const { dispatch, group } = this.props;
    dispatch(getActualStudents(group.guid, new Date()));
  }

  render() {
    const { group, period, students } = this.props;
    const calcedGroupName = group.getNameFromDate(period.end);
    const currentGroupName = group.getNameFromDate((new Period(new Date())).end);
    const originalGroupName = (!period.isCurrent() && currentGroupName !== calcedGroupName)
      ? <div>Текущее имя группы {group.getNameFromDate((new Period(new Date())).end)}</div>
      : null;
    return (
      <div className="page">
        <h1>{calcedGroupName}</h1>
        {originalGroupName}
        {group.guid}
        <div>
          <ol>
            {students.map(student => (
              <li key={student.guid}>
                <div>{student.fullName}</div>
                <pre><small>{student.guid}</small></pre>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  period: state.period,
  students: state.students
});

export default connect(mapStateToProps)(GroupDetail);
