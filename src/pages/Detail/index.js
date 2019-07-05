import React, { Component } from "react";
import { connect } from "react-redux";

import { getActualStudents } from "../../actions";

class GroupDetail extends Component {
  componentWillMount() {
    const { dispatch, group } = this.props;
    dispatch(getActualStudents(group.guid, new Date()));
    console.log("created");
  }

  render() {
    const { group, period, students } = this.props;
    const originalGroupName = !period.isCurrent()
      ? <div>Текущее имя группы {group.getNameFromDate(new Date())}</div>
      : null;
    return (
      <div className="page">
        <h1>{group.getNameFromDate(period.end)}</h1>
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
