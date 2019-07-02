import React, { Component } from "react";

import { pluralize } from "../../helpers";

class GroupCard extends Component {
  render() {
    const { name, guid, studentsCount } = this.props;

    return (
      <div className="group-card">
        <h2 className="group-card__title">{name}</h2>
        <pre><small>{guid}</small></pre>
        {studentsCount !== undefined ? 
          <div>{pluralize(studentsCount, "студент|студента|студентов")}</div> : null}
      </div>
    );
  }
}

export default GroupCard;