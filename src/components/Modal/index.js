import React, { Component } from "react";

class Modal extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="modal__background">
        <div className="modal">
          {children}
        </div>
      </div>
    );
  }
}

export default Modal;
