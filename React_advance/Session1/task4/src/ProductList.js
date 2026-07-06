import React from "react";
import useFetchData from "./useFetchData";

function ProductList() {
  const { loading, data, error } = useFetchData(
    "https://fakestoreapi.com/products"
  );

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Flipkart Product List</h2>

      <ul className="list-group">
        {data.map((product) => (
          <li key={product.id} className="list-group-item">
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;