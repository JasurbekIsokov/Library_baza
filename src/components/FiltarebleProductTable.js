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

  handleFilterText = (filterText) => {
    this.setState({ filterText: filterText });
  };

  handleInStockonly = (inStockOnly) => {
    this.setState({ inStockOnly: inStockOnly });
  };

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterText}
          onStockonly={this.handleInStockonly}
        />
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
