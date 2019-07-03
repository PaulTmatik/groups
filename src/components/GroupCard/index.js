import React, { Component } from "react";

import { pluralize } from "../../helpers";

class GroupCard extends Component {
  render() {
    const { name, guid, startedAt, endedIn, studentsCount } = this.props;

    return (
      <button 
        className="group-card"
        onClick={this.props.onClick}
      >
        <h2 className="group-card__title">{name}</h2>
        <pre><small>{guid}</small></pre>
        {studentsCount !== undefined ? 
          <div>{pluralize(studentsCount, "студент|студента|студентов")}</div> : null}
        <div>Начало: {startedAt.toLocaleDateString("ru-RU")}</div>
        <div>Выпуск: {endedIn.toLocaleDateString("ru-RU")}</div>
      </button>
    );
  }
}

export default GroupCard;
