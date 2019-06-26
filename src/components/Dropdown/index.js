import React, { Component } from "react";

class Dropdown extends Component {
  constructor() {
    super();
    this.state = {
      isPaneShown: false
    }

    this.toggleShowPane = this.toggleShowPane.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  render() {
    const { caption, children } = this.props;
    const loadPane = this.state.isPaneShown ? (
      <div className="dropdown__pane">
        {children}
      </div>
    ) : null;
    return (
      <div 
        className="dropdown"
        ref={node => { this.node = node; }}
      >
        <button 
          className="dropdown__toggle"
          onClick={this.handleClick}
        >
          {caption}
        </button>
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

  handleClick() {
    if (!this.state.isPaneShown) {
      document.addEventListener('click', this.handleOutsideClick, false);
    }
    else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.toggleShowPane();
  }

  handleOutsideClick(e) {
    if (this.node.contains(e.target)) return;
    this.handleClick();
  }
}

export default Dropdown;
