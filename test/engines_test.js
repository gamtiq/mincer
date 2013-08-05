/* global describe, it */


"use strict";


var assert = require("assert");


describe("Engines", function () {

  var env = require("./environment")();

  describe("EJS", function () {
    it("should process javascripts", function () {
      var asset = env.findAsset("ejs_engine/javascript");
      assert(asset.toString().match(/\/assets\/ixti-[a-f0-9]{32}.gif/));
      assert(asset.toString().match(/data:image\/gif;base64/));
    });

    it("should process stylesheets", function () {
      var asset = env.findAsset("ejs_engine/stylesheet");
      assert(asset.toString().match(/\/assets\/ixti-[a-f0-9]{32}.gif/));
      assert(asset.toString().match(/data:image\/gif;base64/));
    });
  });

  describe("LESS", function () {
    it("should support context helpers", function () {
      var asset = env.findAsset("less_engine/stylesheet");
      assert(asset.toString().match(/\/assets\/ixti-[a-f0-9]{32}.gif/));
      assert(asset.toString().match(/data:image\/gif;base64/));
    });
  });


  describe("JST", function () {
    describe("ECO", function () {
      it("should compile to a JS function", function () {
        var asset = env.findAsset("jst_engine/eco/template");

        assert(asset.toString().match(/this\.JST/));
        assert(asset.toString().match(/value\.ecoSafe/));
      });
    });
  });

});
