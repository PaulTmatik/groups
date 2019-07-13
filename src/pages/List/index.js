import React, { Component } from "react";
import { connect } from "react-redux";

import { changeLocation, saveGroup } from "../../actions";

import GroupCard from "../../components/GroupCard";
import Modal from "../../components/Modal";

import AddItemForm from "./AddItem";

class ListPage extends Component {
  constructor () {
    super();
    this.state = {
      saveableGroup: null,
      isSaveButtonEnabled: false
    }
  }
  componentWillMount() {
    const { onCloseModal } = this.props;
    onCloseModal();
  }

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
          <Modal
            onCloseModal={onCloseModal}
            onSaveEvent={this.onSaveHandle}
            isSaveButtonEnabled={this.state.isSaveButtonEnabled}
          >
            <AddItemForm
              onChange={this.addItemChangeHandler}
              onSubmit={this.onSaveHandle}
            />
          </Modal>
        ) : null}
      </div>
    )
  }

  addItemChangeHandler = group => {
    this.setState({saveableGroup: group}, () => {
      this.saveButtonEnabledHandle();
    });
  }

  onSaveHandle = () => {
    if (this.state.saveableGroup) {
      const { dispatch, onCloseModal } = this.props;
      dispatch(saveGroup(this.state.saveableGroup));
      onCloseModal();
    }
  }

  saveButtonEnabledHandle = () => {
    const {saveableGroup} = this.state;
    this.setState({isSaveButtonEnabled: Boolean(saveableGroup)})
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
