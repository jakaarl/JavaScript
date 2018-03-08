"use strict";

const assert = require('assert');
const sinon = require('sinon');
const app = require('../sources/app');

describe("createQueryString()", () => {
  describe("given no params", () => {
    it("should return empty string", () => {
      assert.equal(app.createQueryString(), "");
    });
  });
  describe("given empty params", () => {
    it("should return empty string", () => {
      assert.equal(app.createQueryString([]), "");
    });
  });
  describe("given a single parameter name and value", () => {
    it("should return question mark followed by name, equals-sign and value", () => {
      assert.equal(app.createQueryString([{ name: "name", value: "value"}]), "?name=value");
    });
  });
  describe("given several parameters", () => {
    it("should return name-value pairs separated by ampersands", () => {
      assert.equal(
        app.createQueryString([{ name: "name", value: "value"}, { name: "otherName", value: "otherValue" }]),
        "?name=value&otherName=otherValue"
      );
    });
  });
});

describe("makeGetRequest()", () => {
  var xhr, requests;

  before(() => {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function (req) { requests.push(req); };
  });
  after(() => {
    xhr.restore();
  });

  describe("returning OK status", () => {

  });

  describe("returning non-OK status", () => {

  });

});