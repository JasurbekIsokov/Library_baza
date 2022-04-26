import React from "react";

import SearchBar from "./SearchBar.js";
import ProductTable from "./ProductTable.js";

class FiltarebleProductTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.product} />
      </div>
    );
  }
}

export default FiltarebleProductTable;
