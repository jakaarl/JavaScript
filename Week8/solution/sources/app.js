"use strict";

function buttonClicked() { // eslint-disable-line no-unused-vars
  console.log("You clicked me!"); // eslint-disable-line no-console
}

function createQueryString(params) {
  return params ? params.reduce(function (accumulator, currentParam, currentIndex) {
    var separator = currentIndex === 0 ? "?" : "&";
    return `${accumulator}${separator}${currentParam.name}=${currentParam.value}`;
  }, "") : "";
}

function makeGetRequest(url, params, callback) {
  const request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    const response = {};
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        response.data = JSON.parse(request.responseText); // eslint-disable-line no-undef
      } else {
        response.err = {
          status: request.status,
          message: request.statusText
        };
      }
      callback(response);
    }
  };
  const queryString = createQueryString(params);
  request.open("GET", url + queryString, true);
  request.send();
}

module.exports.buttonClicked = buttonClicked; // eslint-disable-line no-undef
module.exports.createQueryString = createQueryString; // eslint-disable-line no-undef
module.exports.makeGetRequest = makeGetRequest; // eslint-disable-line no-undef