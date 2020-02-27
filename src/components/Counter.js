import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
    sum: 0,
    fixedNumber: 10
  };
  render() {
    const { counter, sum, fixedNumber } = this.state;
    return (
      <div>
        <h1>값: {counter}</h1>
        <h1>총합: {sum}</h1>
        <h2>고정값: {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState({ counter: counter + 1, sum: sum + 1 }, () => {
              console.log("호출완료");
              console.log(this.state);
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
