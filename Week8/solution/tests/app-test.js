"use strict";

const assert = require('assert');
const sinon = require('sinon');
const app = require('../sources/app');

describe("createQueryString()", function () {
  describe("given no params", function () {
    it("should return empty string", function () {
      assert.equal(app.createQueryString(), "");
    });
  });
  describe("given empty params", function () {
    it("should return empty string", function () {
      assert.equal(app.createQueryString([]), "");
    });
  });
  describe("given a single parameter name and value", function () {
    it("should return question mark followed by name, equals-sign and value", function () {
      assert.equal(app.createQueryString([{ name: "name", value: "value"}]), "?name=value");
    });
  });
  describe("given several parameters", function () {
    it("should return name-value pairs separated by ampersands", function () {
      assert.equal(
        app.createQueryString([{ name: "name", value: "value"}, { name: "otherName", value: "otherValue" }]),
        "?name=value&otherName=otherValue"
      );
    });
  });
});

describe("makeGetRequest()", function () {
  var xhr, requests;

  before(function () {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function (req) { requests.push(req); };
  });
  after(function () {
    xhr.restore();
  });

});