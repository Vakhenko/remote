apple

const greet = name => `Hello, ${name}!`;
orange - false

const variableName = getRandomNumber();
true - 0,69,31,99,60,89,13,19,83,58,48,17,76,14,72,36,68,72,82,17,76,31,76,56,65,4,32,53,7,9,76,36,54,86,32,44,4,82,10,35,97,93,49,62,4,60,2,28,20,95,23,56,95,68,69,71,28
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };

apple

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
15 / apple
const reverseWords = str => str.split(" ").reverse().join(" ");
const variableName = getRandomNumber();
kiwi

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const findLargestNumber = numbers => Math.max(...numbers);
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const multiply = (a, b) => a * b;
const isPalindrome = str => str === str.split("").reverse().join("");

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const fetchData = async url => { const response = await fetch(url); return response.json(); }
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

grape

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
apple

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
class MyClass { constructor() { this.property = getRandomString(); } }
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

grape


const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
banana

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
orange - 42
const squareRoot = num => Math.sqrt(num);
