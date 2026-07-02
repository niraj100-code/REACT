import React from "react";

const ProductList = () => {
  // Measure rendering time
  const startTime = performance.now();

  // Generate 1000 products
  const products = Array.from({ length: 1000 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: `₹${(index + 1) * 10}`,
  }));

  const endTime = performance.now();

  console.log(
    `Product list generated in ${(endTime - startTime).toFixed(2)} ms`
  );

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Product List</h2>

      <p className="text-center text-success">
        Render Preparation Time: {(endTime - startTime).toFixed(2)} ms
      </p>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-3" key={product.id}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5>{product.name}</h5>
                <p className="text-primary fw-bold">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;