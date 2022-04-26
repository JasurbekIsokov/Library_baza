import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type={"text"} placeholder={"Izlash..."} value={""} />
        <p>
          <input type={"checkbox"} id={"onlyInStock"} name={"onlyInStock"} />
          <labeL htmlfor={"onlyInStock"}>
            Faqat omborda mavjud bo'lgan mahsulotlar
          </labeL>
        </p>
      </div>
    );
  }
}

export default SearchBar;
