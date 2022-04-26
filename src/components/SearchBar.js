import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSearchTextChange = (e) => {
    this.props.onFilterTextChange(e.target.value);
  };

  handleInStockonly = (e) => {
    this.props.onStockonly(e.target.value);
  };

  render() {
    return (
      <div>
        <input
          type={"text"}
          placeholder={"Izlash..."}
          value={this.props.inputText}
          onChange={this.handleSearchTextChange}
        />
        <p>
          <input
            type={"checkbox"}
            id={"onlyInStock"}
            name={"onlyInStock"}
            checked={this.props.inStockonly}
            onChange={this.props.handleInStockonly}
          />
          <label htmlFor={"onlyInStock"}>
            Faqat omborda mavjud bo'lgan mahsulotlar
          </label>
        </p>
      </div>
    );
  }
}

export default SearchBar;
