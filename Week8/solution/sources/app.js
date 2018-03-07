"use strict";

function buttonClicked() {
  console.log("You clicked me!"); // eslint-disable-line no-console
}

function createQueryString(params) {
  return params ? params.reduce(function (accumulator, currentParam, currentIndex) {
    var separator = currentIndex === 0 ? "?" : "&";
    return `${accumulator}${separator}${currentParam.name}=${currentParam.value}`;
  }, "") : "";
}

function makeGetRequest(url, params, callback) {  // eslint-disable-line no-unused-vars
  const request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    const response = {};
    if (request.readyState === 4 && request.status === 200) {
      response.responseText = request.responseText;
    } else {
      response.err = {
        readyState: request.readyState,
        status: request.status,
        message: request.statusText
      };
    }
    callback(response);
  };
  const queryString = createQueryString(params);
  request.open("GET", url + queryString, true);
  request.send();
}

module.exports.buttonClicked = buttonClicked; // eslint-disable-line no-undef
module.exports.createQueryString = createQueryString; // eslint-disable-line no-undef