"use strict";
const app = require("./app"); // eslint-disable-line no-undef
const buttonElem = document.getElementById("button");
const listElem = document.getElementById("results");

function listGitHubRepos() {
  const organization = "HackYourFuture";
  const url = `https://api.github.com/orgs/${organization}/repos`;
  const params = [
    { name: "type", value: "public" }
  ];
  app.makeGetRequest(url, params, handleResponse);
}

function handleResponse(response) {
  let results = [];
  if (response.err) {
    console.log("Request failed: " + response.err); // eslint-disable-line no-console
  } else {
    results = response.data.map(function (entry) {
      return { name: entry.name, description: entry.description };
    });
  }
  updateList(results);
}

function updateList(results) {
  clearList();
  results.forEach(element => {
    let item = document.createElement("li"); // eslint-disable-line no-undef
    item.innerText = `${element.name}${element.description ? " - " + element.description : ""}`;
    listElem.appendChild(item);
  });
}

function clearList() {
  while (listElem.hasChildNodes()) {
    listElem.removeChild(listElem.lastChild);
  }
}

buttonElem.addEventListener("click", listGitHubRepos);
