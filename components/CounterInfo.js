import React from "react";
import { withGlobalState } from "react-globally";

const CounterInfo = ({ setGlobalState, globalState }) => {
  return (
    <div>
      The counter value: {globalState.counter}
      <button onClick={() => setGlobalState({ counter: 100 })}>
        Set to 100
      </button>
    </div>
  );
};

export default withGlobalState(CounterInfo);
