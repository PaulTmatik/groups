import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {

  render() {
    const { period } = this.props;
    return (
      <div>
        <h1>Hello, Groups</h1>
        <span>{period}</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  period: state.period
})

export default connect(mapStateToProps)(App);
