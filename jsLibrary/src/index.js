import { myMath } from './myMath';

let a = myMath.toInteger(4.656)
console.log(a);

let d = myMath.toNumber('3tacos')
console.log(d)

let m = myMath.ceil(4.67776, 3)
let c = myMath.floor(3.5647, 2)
let b = myMath.round(5.66565, 3)
console.log(m)
console.log(c)
console.log(b)

let array = [4, 2, 8, 6]
let arrayMin = myMath.min(array)
let arrayMean = myMath.mean(array)
let arrayMax = myMath.max(array)
console.log(arrayMin);
console.log(arrayMean);
console.log(arrayMax);

let myRange = myMath.inRange(3, 1, 5)
console.log(myRange);

let x = myMath.random(1, 6)
console.log(x)