// App.js
import React, { useState } from "react";
import NewProductForm from "./Components/NewProductForm";

function App() {
  const [products, setProducts] = useState([]);

  const saveProductHandler = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    acc[product.productCategory] = acc[product.productCategory] || [];
    acc[product.productCategory].push(product);
    return acc;
  }, {});

  return (
    <div>
      <NewProductForm onSaveProductData={saveProductHandler} />
      {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
        <div key={category}>
          <h2>{category}</h2>
          <ul>
            {categoryProducts.map((product, index) => (
              <li key={index}>
                <strong>Product ID:</strong> {product.productId},{" "}
                <strong>Name:</strong> {product.productName},{" "}
                <strong>Price:</strong> {product.productPrice}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
