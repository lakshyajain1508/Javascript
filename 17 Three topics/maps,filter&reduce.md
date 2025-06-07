# JavaScript map , filter , reduce

The `map`, `filter`, and `reduce` methods are powerful array methods in JavaScript used for manipulating and processing arrays. Here's an overview of each of these methods:

### `map()`

The `map()` method creates a new array by applying a given function to each element of the original array. It does not modify the original array but returns a new one with the modified values.

Syntax:
```javascript
const newArray = array.map(callback(currentValue, index, array));
```

- `callback`: A function that is called for each element in the array.
- `currentValue`: The current element being processed.
- `index` (optional): The index of the current element.
- `array` (optional): The array being processed.

Example:

```javascript
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(function(number) {
    return number * number;
});
// squaredNumbers is [1, 4, 9, 16, 25]
```

### `filter()`

The `filter()` method creates a new array containing all elements from the original array that satisfy a specified condition. It does not modify the original array.

Syntax:
```javascript
const newArray = array.filter(callback(element, index, array));
```

- `callback`: A function that tests each element.
- `element`: The current element being processed.
- `index` (optional): The index of the current element.
- `array` (optional): The array being processed.

Example:

```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
// evenNumbers is [2, 4]
```

### `reduce()`

The `reduce()` method applies a function to an accumulator and each element in the array (from left to right) to reduce the array to a single value. It can be used for various operations, such as summing values or finding the maximum.

Syntax:
```javascript
const result = array.reduce(callback(accumulator, currentValue, index, array), initialValue);
```

- `callback`: A function that is called for each element in the array.
- `accumulator`: The accumulator accumulates the callback's return values. It is the initial value or the result from the previous iteration.
- `currentValue`: The current element being processed.
- `index` (optional): The index of the current element.
- `array` (optional): The array being processed.
- `initialValue` (optional): An initial value for the accumulator.

Example:

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
// sum is 15
```

These array methods are essential for transforming and processing data within arrays. They make your code more readable and concise when working with arrays in JavaScript.

***

### `map()`

The `map()` method is used to transform each element of an array into a new value and create a new array with the results.

```javascript
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(function(number) {
    return number * number;
});

console.log(squaredNumbers); // [1, 4, 9, 16, 25]
```

In this example, `map()` squares each number in the `numbers` array and creates a new array with the squared values.

### `filter()`

The `filter()` method is used to create a new array containing elements that meet a specific condition.

```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log(evenNumbers); // [2, 4]
```

In this example, `filter()` creates a new array with only the even numbers from the `numbers` array.

### `reduce()`

The `reduce()` method is used to reduce an array into a single value based on an accumulator and a provided function.

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum); // 15
```

In this example, `reduce()` adds up all the numbers in the `numbers` array and returns the sum, starting with an initial value of 0.

These methods are powerful for data transformation, filtering, and aggregation tasks in JavaScript.


```js
const number = [1, 2, 3, 4, 5];
```
## map() Method
```js
const numbers = [1, 2, 3, 4, 5];

const square = numbers.map(item => item * item);
console.log(square);
```
**Output**
```
[ 1, 4, 9, 16, 25 ]
```
***
```js
const names = ["James", "Marie", "Rosa"];

const fullNames = names.map(item => item + " Smith");
console.log(fullNames);
```
**Output**
```
[ 'James Smith', 'Marie Smith', 'Rosa Smith' ]
```
## filter() Method
```js
const number = [1, 2, 3, 4, 5];

const result = number.filter(item => item < 3);
console.log(result);
```
**Output**
```
[1, 2]
```
***
```js
const number = [1, 2, 3, 4, 5];

const result = number.filter(item => item % 2 !== 0);
console.log(result);
```
**Output**
```
[1, 3, 5, 7]
```
***
## reduce() Method
```js
const numbers = [1, 2, 3, 4, 5];

const reducer = (previousValue, currentValue) => previousValue + currentValue;

const result = numbers.reduce(reducer);
console.log(result);
```
**Output**
```
15
```