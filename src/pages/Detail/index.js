import React, { Component } from "react";

class GroupDetail extends Component {
  render() {
    const { group } = this.props;
    return (
      <div className="page">
        {group.guid}
      </div>
    )
  }
}

export default GroupDetail;
