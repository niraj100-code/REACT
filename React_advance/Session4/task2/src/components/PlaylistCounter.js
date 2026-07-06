import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return {
        count: state.count > 0 ? state.count - 1 : 0,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
};

const PlaylistCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container mt-5">
      <div className="card mx-auto shadow" style={{ width: "22rem" }}>
        <div className="card-body text-center">
          <h2 className="card-title">🎵 Playlist Counter</h2>

          <h3 className="my-4">
            Number of Songs: {state.count}
          </h3>

          <button
            className="btn btn-success me-2"
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            Add Song
          </button>

          <button
            className="btn btn-danger me-2"
            onClick={() => dispatch({ type: "DECREMENT" })}
            disabled={state.count === 0}
          >
            Remove Song
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

export default PlaylistCounter;