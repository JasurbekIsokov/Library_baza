import React from "react";

class FiltarebleProductTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable product={this.props.product} />
      </div>
    );
  }
}

export default FiltarebleProductTable;
