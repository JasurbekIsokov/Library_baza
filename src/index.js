import React from "react";
import ReactDOM from "react-dom";

import FiltarebleProductTable from "./components/FiltarebleProductTable.js";

const PRODUCT = [
  { price: "3.10$", stocked: true, name: "Ulamolar Naznida vaqtning qadri" },
  { price: "5.10$", stocked: true, name: "Biz g'alaba qozonamiz " },
  { price: "6.1$", stocked: false, name: "Alkimyogar" }, //Omborda mavjud emas
  { price: "2.10$", stocked: true, name: "Ijtimoiy odoblar" },
  { price: "1.10$", stocked: false, name: "Savdogarlar ustozi" }, // Omborda mavjud emas
  { price: "7.10$", stocked: false, name: "Zukkolar va landavurlar" }, // Omborda mavjud emas
  { price: "1.60$", stocked: false, name: "O'zbeklar" }, // Omborda mavjud emas
  { price: "2.40$", stocked: true, name: "Supper Hayot" },
];

ReactDOM.render(
  <FiltarebleProductTable product={PRODUCT} />,
  document.querySelector("#root")
);
