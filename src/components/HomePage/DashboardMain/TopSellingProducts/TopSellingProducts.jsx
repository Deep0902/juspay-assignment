import "./TopSellingProducts.css";
import { products } from "../../../../data/tableData";

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
