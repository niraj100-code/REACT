import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return initialState;

    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container mt-5">
      <div className="card shadow mx-auto" style={{ width: "22rem" }}>
        <div className="card-body text-center">
          <h2 className="card-title">Counter using useReducer</h2>

          <h3 className="my-4">Count: {state.count}</h3>

          <button
            className="btn btn-success me-2"
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            Increment
          </button>

          <button
            className="btn btn-danger me-2"
            onClick={() => dispatch({ type: "DECREMENT" })}
          >
            Decrement
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => dispatch({ type: "RESET" })}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;