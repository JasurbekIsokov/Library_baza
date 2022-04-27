import React from "react";

import "../style.css";

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
      <div className="search_input_div">
        <input
          className="search_input"
          type={"text"}
          placeholder={"Izlash..."}
          value={this.props.inputText}
          onChange={this.handleSearchTextChange}
        />
        <p className="filter">
          <input
            className="filter_chekbox"
            type={"checkbox"}
            id={"onlyInStock"}
            name={"onlyInStock"}
            checked={this.props.inStockonly}
            onChange={this.handleInStockonly}
          />
          <label htmlFor={"onlyInStock"}>
            Faqat kutubxonada mavjud bo'lgan kitoblar
          </label>
        </p>
      </div>
    );
  }
}

export default SearchBar;
