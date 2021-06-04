# myMath
myMath is a demo library in which ten functions that mirror Lodash functions have been re-created. The documentation covers the
 _.toInteger, _.toNumber, _.ceil, _.floor, 
 _.inRange, _.round, _.random, _.min, _.mean, _.max. 

 ## Usage
 Import myMath

 ## Lang Methods
 #### Syntax: toInteger(value)
 Converts a value to an integer. 
 ##### Params
 value (*): Value to convert.
 ##### Returns
 (number): Returns the converted integer. 
 ##### Full Syntax
 toInteger(value) {
            const parsed = parseInt(value)
            if (isNaN(parsed)) {
                throw new Error('Cannot convert value to integer.s')
            }
            return parsed;
        },
#### Example
let a = myMath.toInteger(4.656)
console.log(a); // => 4;

#### Syntax: toNumber(value)
 Converts a value to an number. 
 ##### Params
 value (*): Value to convert.
 ##### Returns
 (number): Returns the converted number. 
 ##### Full Syntax
 toNumber(value) {
            const num = parseFloat(value)
            if (isNaN(num)) {
                throw new Error('Cannot convert value to number.')
            }
            return num;
        },
#### Example
let d =  myMath.toNumber('3tacos')
console.log(d) // => 3;

## Math Methods
#### Syntax: ceil (number, [precision=0])
 Computes number rounded up to specified precision. Precision = 0 by default.
 ##### Params
 (number): The number to round up.
 (precision): The precision to round up to. 
 ##### Returns
 (number): Returns the rounded up number. 
 ##### Full Syntax
 ceil(number, precision) {
            precision = Math.abs(parseInt(precision)) || 0;
            var coefficient = Math.pow(10, precision);
            if (isNaN(number)) {
                throw new Error ('Please enter valid number.')
            }
            return Math.round(number * coefficient) / coefficient;
        },
#### Example
let m = myMath.ceil(4.67776, 3)
console.log(m)// => 4.678;
#### Syntax: floor (number, [precision=0])
Computes number rounded down to specified precision. Precision = 0 by default. 
 ##### Params
 (number): The number to round down.
 (precision): The precision to round down to. 
 ##### Returns
 (number): Returns the rounded down number. 
 ##### Full Syntax
 floor(number, precision) {
            precision = Math.abs(parseInt(precision)) || 0;
            var coefficient = Math.pow(10, precision);
            if (isNaN(number)) {
                throw new Error ('Please enter valid number.')
            }
            return Math.round(number * coefficient) / coefficient;
        },
#### Example
let c = myMath.floor(3.5647, 2)
console.log(c) //  => 3.56;
 #### Syntax: round (number, [precision = 0])
Computes number rounded to specified precision. Precision = 0 by default. 
 ##### Params
 (number): The number to round down.
 (precision): The precision to round down to. 
 ##### Returns
 (number): Returns the rounded number. 
 ##### Full Syntax
 round(number, precision) {
            precision = Math.abs(parseInt(precision)) || 0;
            var coefficient = Math.pow(10, precision);
            if (isNaN(number)) {
                throw new Error ('Please enter valid number.')
            }
            return Math.round(number * coefficient) / coefficient;
        },
#### Example
let b = myMath.round(5.66565, 3)
console.log(b) //  => 5.666;
#### Syntax: min(array)
Computes the minimum value of array. If array is empty or falsey, undefined is returned. 
 ##### Params
 (array): The array to iterate over. 
 ##### Returns
 (*): Returns the minimum value. 
 ##### Full Syntax
min(array) {
            var min = Math.min.apply(Math, array)
            if (!Array.isArray(array)) {
                throw new Error('This function only works on arrays.');
            }
            return min;
        },
#### Example
let array = [4, 2, 8, 6]
let arrayMin = myMath.min(array)
console.log(arrayMin) // => 2;
 #### Syntax: mean(array)
Computes the mean value of array. If array is empty or falsey, undefined is returned. 
 ##### Params
 (array): The array to iterate over.
 ##### Returns
 (*): Returns the mean value. 
 ##### Full Syntax
mean(array) {
            var values = (array);
            values.sort((a, b) => a - b);
            let lowMiddle = Math.floor((values.length - 1) / 2);
            let highMiddle = Math.ceil((values.length - 1) / 2);
            let mean = (values[lowMiddle] + values[highMiddle]) / 2;
            if (!Array.isArray(array)) {
                throw new Error('This function only works on arrays.');
            }
            return mean;
        },
#### Example
let array = [4, 2, 8, 6]
let arrayMean = myMath.mean(array)
console.log(arrayMean)// => 5;
 #### Syntax: max(array)
Computes the max value of array. If array is empty or falsey, undefined is returned. 
 ##### Params
 (array): The array to iterate over.
 ##### Returns
 (*): Returns the max value. 
 ##### Full Syntax
max(array) {
            var max = Math.max.apply(Math, array)
            if (!Array.isArray(array)) {
                throw new Error('This function only works on arrays.');
            }
            return max;
        },
#### Example
let array = [4, 2, 8, 6]
let arrayMax = myMath.max(array)
console.log(arrayMax)// => 8;

## Number Methods
#### Syntax: inRange(num, start, end)
Checks if a number is between start and up to, but not including, end. If end is not specified, it's set to start with start then set to 0. If start is greater than end the params are swapped to support negative ranges. 
 ##### Params
num (number): The number to check.
[start=0] (number): The start of the range.
end (number): The end of the range.
 ##### Returns
 (boolean): Either true or false. 
 ##### Full Syntax
inRange(num, start, end) {
            if (num < start && num > end) {
                throw new Error ('Number is not in range.')
            } 
            return true;
        },
#### Example
let myRange = myMath.inRange(3, 1, 5)
console.log(myRange) // => true;
#### Syntax: random(number)
Produces a random number between the non-inclusive min and max bounds. If only one argument is provided a number between 0 and the given number is returned.
 ##### Params
[min] (number): The minimum number parameter.
[max] (number): The  maximum number parameter.
 ##### Returns
 (number): Returns the random number. 
 ##### Full Syntax
random(min, max) {
            if (min === max) {
                throw new Error('Bounds cannot be the same.')
            }
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
#### Example
let x = myMath.random(1, 6)
console.log(x) // => 5