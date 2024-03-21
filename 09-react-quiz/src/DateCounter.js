import { useReducer, useState } from "react";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  console.log({ state, action });

  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + state.step };
    case "decrement":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      // return { count: 0, step: 1 };
      return { ...initialState };
    default:
      throw new Error("Unknown");
  }
  // return state + action;
  // if (action.type === "increment") {
  //   return state + action.payload;
  // }
  // if (action.type === "decrement") {
  //   return state - action.payload;
  // }
  // if (action.type === "setCount") {
  //   return action.payload;
  // }
}

function DateCounter() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

  const [dateCounterState, dispatch] = useReducer(reducer, initialState);

  const { count, step } = dateCounterState;

  // This mutates the date object.
  const date = new Date("march 19 2024");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // dispatch(-1)
    dispatch({ type: "decrement", payload: 1 });
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    // dispatch(1);
    dispatch({ type: "increment", payload: 1 });
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    // dispatch(e.target.value)
    dispatch({ type: "setCount", payload: Number(e.target.value) });
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
    // setStep(Number(e.target.value));
  };

  const reset = function () {
    dispatch({ type: "reset" });
    // dispatch({ type: "resetStep", payload: 1 });
    // setCount(0);
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
