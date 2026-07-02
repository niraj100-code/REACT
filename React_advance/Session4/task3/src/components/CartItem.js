import React, { useReducer } from "react";

const initialState = {
  quantity: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { quantity: state.quantity + 1 };

    case "DECREMENT":
      return {
        quantity: state.quantity > 1 ? state.quantity - 1 : 1,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
};

const CartItem = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container mt-5">
      <div className="card shadow mx-auto" style={{ width: "24rem" }}>
        <div className="card-body text-center">
          <h3 className="card-title text-primary">
            Flipkart Cart Item
          </h3>

          <h5 className="mt-3">
            Product: Wireless Headphones
          </h5>

          <h4 className="my-4">
            Quantity: {state.quantity}
          </h4>

          <button
            className="btn btn-success me-2"
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            +
          </button>

          <button
            className="btn btn-danger me-2"
            onClick={() => dispatch({ type: "DECREMENT" })}
          >
            -
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

export default CartItem;