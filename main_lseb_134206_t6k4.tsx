const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

92 * 95
// This is a comment
const randomNumber = getRandomNumber();
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const findLargestNumber = numbers => Math.max(...numbers);
console.log(getRandomString());
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
