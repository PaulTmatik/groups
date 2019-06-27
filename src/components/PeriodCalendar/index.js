import React, {Component} from "react";
import {connect} from "react-redux";

import {setPeriod} from "../../actions";

import Period from "../../structures/Period";

class PeriodCalendar extends Component {
  render() {
    const {period} = this.props;
    return (
      <div className="period-calendar">
        <div className="period-calendar__toolbar">
          <button className="period-calendar__button">&lt;</button>
          <button 
            className="period-calendar__button"
            onClick={this.handleSetCurrentPeriodClick}
          >
            Текущий период
          </button>
          <button className="period-calendar__button">&gt;</button>
        </div>
        <div className="period-calendar__body">
        {this.createPeriodsSetFromCurrent(period).map((periodItem, index) => (
          <button
            key={index}
            onClick={() => this.handleSetPeriodClick(periodItem)}
          >
            {String(periodItem)}
          </button>
        ))}
        </div>
      </div>
    );
  }

  createPeriodsSetFromCurrent(period) {
    let indexYear = period.start.getFullYear() - 4;
    const output = [];
    for(let i = 0; i < 9; i++) {
      output.push(new Period(new Date(indexYear++, 8, 1)));
    }
    return output;
  }

  handleSetPeriodClick = periodItem => {
    const {dispatch} = this.props;
    dispatch(setPeriod(periodItem));
    return;
  }

  handleSetCurrentPeriodClick = () => {
    const {dispatch} = this.props;
    dispatch(setPeriod(new Period(new Date())));
    return;
  }
}

const mapStateToProps = state => ({
  period: state.period
})

export default connect(mapStateToProps)(PeriodCalendar);
