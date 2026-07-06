import React, { useMemo, useState } from "react";

const ProductList = () => {
  // Generate 1000 products
  const products = Array.from({ length: 1000 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: (index + 1) * 10,
  }));

  const [searchTerm, setSearchTerm] = useState("");

  // Memoized filtering
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Product List</h2>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search Product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <p className="text-primary">
        Total Products: {filteredProducts.length}
      </p>

      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-md-3 mb-3" key={product.id}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5>{product.name}</h5>
                <p className="fw-bold text-success">
                  ₹{product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;