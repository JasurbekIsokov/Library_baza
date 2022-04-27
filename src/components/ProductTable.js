import React from "react";

import "../style.css";

import ProductRow from "./ProductRow.js";

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    const rows = [];
    this.props.products.forEach((product) => {
      if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      rows.push(<ProductRow product={product} key={product.name} />);
    });

    return (
      <table className="table">
        <thead>
          <tr style={{ margin: "10px" }}>
            <th>name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody className="table_rows">{rows}</tbody>
      </table>
    );
  }
}

export default ProductTable;
