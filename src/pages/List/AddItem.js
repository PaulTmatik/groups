import React, { Component } from "react";

class AddItemForm extends Component {
  
  render() {
    return (
      <form>
        <label>Имя группы:</label>
        <input type="text" />
        <small>используйте %№% для автоматической вставки номера группы.</small>
        <small>используйте %№+1% для автоматической вставки номера группы больше на 1.</small>
        <label>Начало обучения:</label>
        <input type="date" />
        <label>Окончание обучения:</label>
        <input type="date" />
      </form>
    );
  }
}

export default AddItemForm;
