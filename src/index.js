import React from "react";
import ReactDOM from "react-dom";

import FiltarebleProductTable from "./components/FiltarebleProductTable.js";

const PRODUCT = [
  { price: "$3.10", stocked: true, name: "Shaftoli" },
  { price: "$5.10", stocked: true, name: "O'rik" },
  { price: "$6.1", stocked: false, name: "Gilos" },
  { price: "$2.10", stocked: true, name: "Olma" },
  { price: "$1.10", stocked: false, name: "Anor" },
  { price: "$7.10", stocked: true, name: "Nok" },
  { price: "$2.40", stocked: true, name: "Uzum" },
  { price: "$1.60", stocked: true, name: "Tarvuz" },
];

ReactDOM.render(
  <FiltarebleProductTable product={PRODUCT} />,
  document.querySelector("#root")
);
