import React from "react";

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
