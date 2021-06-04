"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.myMath = void 0;
console.log('Hello from myMath.');

var myMath = function () {
  return {
    toInteger: function toInteger(value) {
      var parsed = parseInt(value);

      if (isNaN(parsed)) {
        throw new Error('Cannot convert value to integer.s');
      }

      return parsed;
    },
    toNumber: function toNumber(value) {
      var num = parseFloat(value);

      if (isNaN(num)) {
        throw new Error('Cannot convert value to number.');
      }

      return num;
    },
    ceil: function ceil(number, precision) {
      precision = Math.abs(parseInt(precision)) || 0;
      var coefficient = Math.pow(10, precision);
      return Math.round(number * coefficient) / coefficient;
    },
    floor: function floor(number, precision) {
      return parseFloat(number).toPrecision(precision);
    },
    inRange: function inRange(number, start, end) {},
    round: function round(number, precision) {
      var coefficient = Math.pow(10, precision);
      var roundedNum = Math.round(number * coefficient / coefficient).toPrecision(precision);
      return roundedNum;
    },
    random: function random(min, max, _boolean) {
      var number = myMath.floor(Math.random() * 100 + 1);
      return number;
    },
    min: function min(array) {
      var min = Math.min.apply(Math, array);

      if (!Array.isArray(array)) {
        throw new Error('This function only works on arrays.');
      }

      return min;
    },
    mean: function mean(array) {
      var values = array;
      values.sort(function (a, b) {
        return a - b;
      });
      var lowMiddle = Math.floor((values.length - 1) / 2);
      var highMiddle = Math.ceil((values.length - 1) / 2);
      var mean = (values[lowMiddle] + values[highMiddle]) / 2;

      if (!Array.isArray(array)) {
        throw new Error('This function only works on arrays.');
      }

      return mean;
    },
    max: function max(array) {
      var max = Math.max.apply(Math, array);

      if (!Array.isArray(array)) {
        throw new Error('This function only works on arrays.');
      }

      return max;
    }
  };
}();

exports.myMath = myMath;