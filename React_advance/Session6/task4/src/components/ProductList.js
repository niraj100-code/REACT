import React, { useState, useMemo, useCallback } from "react";

const ProductList = () => {
  const [count, setCount] = useState(0);

  // Memoize the product list
  const products = useMemo(() => {
    console.log("Generating product list...");
    return Array.from({ length: 1000 }, (_, index) => ({
      id: index + 1,
      name: `Product ${index + 1}`,
      price: `₹${(index + 1) * 10}`,
    }));
  }, []);

  // Memoize the button click function
  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">
        Product List Performance
      </h2>

      <div className="text-center mb-4">
        <h4>Counter: {count}</h4>

        <button
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          Increment Counter
        </button>
      </div>

      <div
        className="border p-3"
        style={{ height: "500px", overflowY: "scroll" }}
      >
        {products.map((product) => (
          <div key={product.id} className="card mb-2">
            <div className="card-body">
              <h5>{product.name}</h5>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;