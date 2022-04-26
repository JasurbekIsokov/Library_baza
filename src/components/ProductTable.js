import React from "react";

import ProductRow from "./ProductRow.js";

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rows = [];
    this.props.products.forEach((product) => {
      rows.push(<ProductRow product={product} />);
    });

    return (
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProductTable;
