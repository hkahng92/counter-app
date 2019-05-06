import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //before the return statement, define a constant, use object destructuring to pick the properties of the props object you're interested in
    //you pick all the below from this.props; Now anywhere you have this.props, you can replace all of those with nothing.
    const { onReset, counters, onDelete, onIncrement } = this.props;
    console.log("Counters - Rendered");
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
