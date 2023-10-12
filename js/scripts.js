// Number Methods
const num = 3.14159;
console.log('Number: ' + num);
console.log('toFixed(2): ' + num.toFixed(2));
console.log('toString(16): ' + num.toString(16));
console.log('parseInt(\'10\', 2): ' + Number.parseInt('10', 2));
console.log('isNaN(num): ' + Number.isNaN(num));
console.log('isFinite(num): ' + Number.isFinite(num));

// Math Methods
console.log('Math.abs(-5): ' + Math.abs(-5));
console.log('Math.round(3.7): ' + Math.round(3.7));
console.log('Math.floor(3.7): ' + Math.floor(3.7));
console.log('Math.ceil(3.2): ' + Math.ceil(3.2));
console.log('Math.max(2, 5, 8): ' + Math.max(2, 5, 8));
console.log('Math.min(2, 5, 8): ' + Math.min(2, 5, 8));
console.log('Math.random(): ' + Math.random());
console.log('Math.pow(2, 3): ' + Math.pow(2, 3));
console.log('Math.sqrt(16): ' + Math.sqrt(16));
console.log('Math.sin(0): ' + Math.sin(0));
console.log('Math.cos(0): ' + Math.cos(0));
console.log('Math.tan(0): ' + Math.tan(0));

// String Methods
const str = 'Hello, World!';
console.log('String: \'' + str + '\'');
console.log('Length: ' + str.length);
console.log('toUpperCase: \'' + str.toUpperCase() + '\'');
console.log('toLowerCase: \'' + str.toLowerCase() + '\'');
console.log('charAt(7): \'' + str.charAt(7) + '\'');
console.log('indexOf(\'World\'): ' + str.indexOf('World'));
console.log('replace(\'World\', \'Universe\'): \'' + str.replace('World', 'Universe') + '\'');
console.log('split(\', \'): ' + str.split(', '));
console.log('trim(): \'' + str.trim() + '\'');
console.log('slice(0, 5): \'' + str.slice(0, 5) + '\'');

// Array Methods
const arr = [1, 2, 3, 4, 5];
console.log('Array: [' + arr + ']');
console.log('Length: ' + arr.length);
arr.push(6);
console.log('push(6): [' + arr + ']');
console.log('pop(): ' + arr.pop());
console.log('shift(): ' + arr.shift());
arr.unshift(0);
console.log('unshift(0): [' + arr + ']');
const arr2 = [6, 7, 8];
console.log('concat([6, 7, 8]): [' + arr.concat(arr2) + ']');
console.log('join(\' - \'): ' + arr.join(' - '));
console.log('slice(1, 4): [' + arr.slice(1, 4) + ']');

// Object Methods
const obj = {
  name: 'John',
  age: 30,
  job: 'Developer'
};
console.log('Object:', obj);
console.log('Object.keys(obj): [' + Object.keys(obj) + ']');
console.log('Object.values(obj): [' + Object.values(obj) + ']');
console.log('Object.entries(obj): [' + Object.entries(obj) + ']');

const obj2 = Object.assign({}, obj, { city: 'New York' });
console.log('Object.assign({}, obj, { city: \'New York\' }):', obj2);
console.log('obj.hasOwnProperty(\'name\'): ' + obj.hasOwnProperty('name'));
console.log('obj.hasOwnProperty(\'city\'): ' + obj.hasOwnProperty('city'));
console.log('Object.is(5, 5): ' + Object.is(5, 5));
console.log('Object.is(-0, 0): ' + Object.is(-0, 0));
