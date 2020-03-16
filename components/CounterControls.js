import React from "react";
import { withGlobalState } from "react-globally";

const CounterControls = ({ setGlobalState }) => {
  const increment = () => {
    setGlobalState(prevGlobalState => ({
      counter: prevGlobalState.counter + 1
    }));
  };

  const decrement = () => {
    setGlobalState(prevGlobalState => ({
      counter: prevGlobalState.counter - 1
    }));
  };

  const zero = () => {
    setGlobalState({
      counter: 0
    });
  };

  return (
    <div>
      <button className="test" onClick={() => increment()}>
        Increment
      </button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => zero()}>Set to Zero</button>
    </div>
  );
};

export default withGlobalState(CounterControls);
