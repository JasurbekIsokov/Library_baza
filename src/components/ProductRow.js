import React from "react";

import "../style.css";

class ProductRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const product = this.props.product;
    return (
      <tr className="table_row" style={{ borderBottom: "1px solid #000" }}>
        <td
          style={{
            border: "1px solid #000",
            padding: "7.5px 12.5px",
          }}
        >
          {product.name}
        </td>
        <td
          style={{
            border: "1px solid #000",
            padding: "7.5px 12.5px",
          }}
        >
          {product.price}
        </td>
      </tr>
    );
  }
}

export default ProductRow;
