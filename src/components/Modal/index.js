import React, { Component } from "react";
import { componentWillAppendToBody } from "react-append-to-body"

class Modal extends Component {
  render() {
    const { children, onCloseModal, onSaveEvent } = this.props;
    return (
      <div className="modal__background">
        <div className="modal">
          {children}
          <footer className="modal__footer">
            {onSaveEvent
              ? <button onClick={onSaveEvent}>Сохранить</button>
              : null
            }
            <button onClick={onCloseModal}>Отмена</button>
          </footer>
        </div>
      </div>
    );
  }
}

export default componentWillAppendToBody(Modal);
