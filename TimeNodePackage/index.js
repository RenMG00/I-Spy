const moment = require('moment');

let currentDate = moment().format('LL');           
console.log(`If I were in the US, I would probably say that today is `+ currentDate);
moment.locale('en-gb');
currentDate = moment().format('LL');
console.log(`If I were in the UK, I would probably say that today is `+ currentDate);
moment.locale('fr')
currentDate = moment().format('LL');
console.log(`If I were in the France, I would probably say that today is `+ currentDate);

moment.locale('en');
let name = 'Ren Gian';

let assignmentTime = moment().subtract(3, 'hours');
assignmentTime = assignmentTime.fromNow(); 
console.log(`${name} began working on this assignment ${assignmentTime}.`);

let tenDays = moment().add(10, 'days').format('LL'); 
console.log(`10 days from when this is graded will be ${tenDays}.`);


let now = moment([2020, 0, 24 ]);
console.log(now);
let end = moment([2020, 2, 12]); // another date

//let days = end.diff(now, 'days');
//console.log(end.diff(now, 'days'));


let milliSeconds = end.diff(now); 
console.log((((milliSeconds / 1000)/60)/60)/24);
let days = (((milliSeconds / 1000)/60)/60)/24;
console.log((days - Math.floor(days))*24);
let hours = (days - Math.floor(days))*24;
console.log((hours - Math.floor(hours)));

let endOfQuarter = end.diff(now);
console.log(`It’s ${Math.floor(days)} days and ${Math.floor(hours)} hours, until the end of the quarter!`);


now = moment([2020, 0, 24 ]);
console.log(now);
end = moment([2020, 11, 25]); // another date
milliSeconds = end.diff(now); 
console.log((((milliSeconds / 1000)/60)/60)/24);
days = (((milliSeconds / 1000)/60)/60)/24;
console.log((days - Math.floor(days))*24);
hours = (days - Math.floor(days))*24;
console.log((hours - Math.floor(hours)));

console.log(`It’s ${Math.floor(days)} days and ${Math.floor(hours)} hours, until the end Chistmas!`);