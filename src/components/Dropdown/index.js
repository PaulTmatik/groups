import React, { Component } from "react";

class Dropdown extends Component {
  constructor() {
    super();
    this.state = {
      isPaneShown: false
    }

    this.toggleShowPane = this.toggleShowPane.bind(this);
  }

  render() {
    const { caption, children } = this.props;
    const loadPane = this.state.isPaneShown ? (
      <div className="dropdown__pane">
        {children}
      </div>
    ) : null;
    return (
      <div className="dropdown">
        <button className="dropdown__toggle" onClick={this.toggleShowPane}>{caption}</button>
        { loadPane }
      </div>
    );
  }

  toggleShowPane() {
    this.setState(prevState => {
      return {
        isPaneShown: !prevState.isPaneShown
      }
    });
  }
}

export default Dropdown;
