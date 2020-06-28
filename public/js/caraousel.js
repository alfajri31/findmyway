const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { } = new JSDOM(`<!DOCTYPE html>`);
const $ = require('jQuery');

$('<h1>Hello</h1>').appendTo('body');
console.log($('h1').text());