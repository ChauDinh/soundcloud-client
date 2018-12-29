import React from "react";
import { expect } from "chai";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

Enzyme.configure({ adapter: new Adapter() });

const { document } = (new JSDOM("<!doctype html><html><body></body></html>", { url: "http:/localhost:6969" })).window;

// expose generated jsdom document and window object into global scope
global.document = document;
global.window = document.defaultView;


Object.keys(window).forEach(key => {
 if (!(key in global)) {
  global[key] = window[key];
 }
});

global.React = React;
global.expect = expect;