import React from "react";

import SearchBar from "./SearchBar.js";
import ProductTable from "./ProductTable.js";

class FiltarebleProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      inStockOnly: false,
    };
  }

  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable
          products={this.props.product}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

export default FiltarebleProductTable;
