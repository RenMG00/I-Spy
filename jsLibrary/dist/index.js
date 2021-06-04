"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _myMath = require("./myMath");

var a = 4.666;
a = _myMath.myMath.toInteger(a);
console.log(a);
var d = '3tacos';

var p = _myMath.myMath.toNumber(d);

console.log(p);
var b = (5.448, 2);

var t = _myMath.myMath.round(b);

console.log(t);
var c = (3.5647, 2);
c = _myMath.myMath.floor(c);
console.log(c); //const getRandomNumber = () => { return Math.round(Math.random() * 100); };

var x = (1, 9);

var z = _myMath.myMath.random(x);

console.log(z);
var _default = [_myMath.myMath];
exports["default"] = _default;
var array = [4, 2, 8, 6];

var arrayMin = _myMath.myMath.min(array);

var arrayMean = _myMath.myMath.mean(array);

console.log(arrayMin);
console.log(arrayMean);