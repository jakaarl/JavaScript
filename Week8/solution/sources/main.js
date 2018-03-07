"use strict";
const app = require("./app"); // eslint-disable-line no-undef
const buttonElem = document.getElementById("button");
buttonElem.addEventListener("click", app.buttonClicked);
