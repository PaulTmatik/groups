import React, { Component } from "react";
import { connect } from "react-redux";

import { changeLocation } from "../../actions";

import GroupCard from "../../components/GroupCard";
import Modal from "../../components/Modal";

import AddItemForm from "./AddItem";

class ListPage extends Component {
  render() {
    const { period, groups, onCloseModal } = this.props;

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
            onClick={() => this.handleLocationChange(group)}
          />
        ))}
        {this.props.isModalShown ? (
          <Modal onCloseModal={onCloseModal}>
            <AddItemForm />
          </Modal>
        ) : null}
      </div>
    )
  }

  handleLocationChange(param) {
    const { dispatch } = this.props;
    dispatch(changeLocation("detail", param));
    return;
  }
}

const mapStateToProps = state => ({
  period: state.period,
  groups: state.groups
});

export default connect(mapStateToProps)(ListPage);
