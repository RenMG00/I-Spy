console.log('Hello from myMath.');

export let myMath = (() => {
    return {
        toInteger(value) {
            const parsed = parseInt(value)
            if (isNaN(parsed)) {
                throw new Error('Cannot convert value to integer.s')
            }
            return parsed;
        },
        toNumber(value) {
            const num = parseFloat(value)
            if (isNaN(num)) {
                throw new Error('Cannot convert value to number.')
            }
            return num;
        },
        ceil(number, precision) {
            precision = Math.abs(parseInt(precision)) || 0;
            var coefficient = Math.pow(10, precision);
            if (isNaN(number)) {
                throw new Error ('Please enter valid number.')
            }
            return Math.round(number * coefficient) / coefficient;
        },
        floor(number, precision) {
            precision = Math.abs(parseInt(precision)) || 0;
            var coefficient = Math.pow(10, precision);
            if (isNaN(number)) {
                throw new Error ('Please enter valid number.')
            }
            return Math.round(number * coefficient) / coefficient;
        },
        
        round(number, precision) {
            precision = Math.abs(parseInt(precision)) || 0;
            var coefficient = Math.pow(10, precision);
            if (isNaN(number)) {
                throw new Error ('Please enter valid number.')
            }
            return Math.round(number * coefficient) / coefficient;
        },
        min(array) {
            var min = Math.min.apply(Math, array)
            if (!Array.isArray(array)) {
                throw new Error('This function only works on arrays.');
            }
            return min;
        },
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
        max(array) {
            var max = Math.max.apply(Math, array)
            if (!Array.isArray(array)) {
                throw new Error('This function only works on arrays.');
            }
            return max;
        },
        inRange(num, start, end) {
            if (num < start && num > end) {
                throw new Error ('Number is not in range.')
            } 
            return true;
        },
        random(min, max) {
            if (min === max) {
                throw new Error('Bounds cannot be the same.')
            }
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
    }
})();



