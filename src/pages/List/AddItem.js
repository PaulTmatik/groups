import React, { Component } from "react";
import Group from "../../structures/Group";

class AddItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: "",
      startPeriod: "",
      endPeriod: "",
    }
  }

  render() {
    const { onSubmit } = this.props;
    return (
      <form onSubmit={e => {
        e.preventDefault(); 
        onSubmit();}}
      >
        <label>Имя группы:</label>
        <input
          name="groupName"
          type="text"
          onChange={this.handleInputChange}
          value={this.state.groupName}
        />
        <small>используйте %№% для автоматической вставки номера группы.</small>
        <small>используйте %№+1% для автоматической вставки номера группы больше на 1.</small>
        <label>Начало обучения:</label>
        <input
          name="startPeriod"
          type="date"
          onChange={this.handleInputChange}
          value={this.state.startPeriod}
        />
        <label>Окончание обучения:</label>
        <input
          name="endPeriod"
          type="date"
          onChange={this.handleInputChange}
          value={this.state.endPeriod}
        />
      </form>
    );
  }

  handleInputChange = e => {
    const target = e.target;
    const { name } = target;
    this.setState({ [name]: e.target.value }, () => {
      this.changeHandler();
    });
  }

  changeHandler = () => {
    const { onChange } = this.props;
    if (this.state.startPeriod && 
        this.state.endPeriod && 
        this.state.groupName) {
      onChange(
        new Group(null,
          this.state.groupName,
          new Date(this.state.startPeriod),
          new Date(this.state.endPeriod)
        )
      );
    }
  }
}

export default AddItemForm;
