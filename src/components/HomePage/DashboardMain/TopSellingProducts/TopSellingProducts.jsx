import React from "react";
import "./TopSellingProducts.css";

const products = [
  {
    name: "ASOS Ridley High Waist",
    price: 79.49,
    quantity: 82,
    amount: 6518.18,
  },
  {
    name: "Marco Lightweight Shirt",
    price: 128.5,
    quantity: 37,
    amount: 4754.5,
  },
  { name: "Half Sleeve  Shirt", price: 39.99, quantity: 64, amount: 2559.36 },
  { name: "Lightweight Jacket", price: 20.0, quantity: 184, amount: 3680.0 },
  { name: "Marco Shoes", price: 79.49, quantity: 64, amount: 1965.81 },
];

function TopSellingProducts() {
  return (
    <div className="tsp-card">
      <h2 className="tsp-title">Top Selling Products</h2>
      <div className="tsp-table-wrap">
        <table className="tsp-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod, idx) => (
              <tr key={prod.name + idx}>
                <td>{prod.name}</td>
                <td>${prod.price.toFixed(2)}</td>
                <td>{prod.quantity}</td>
                <td>
                  $
                  {prod.amount.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TopSellingProducts;
