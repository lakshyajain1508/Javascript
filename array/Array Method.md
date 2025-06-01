# 8 Array Methods You Must Know


1. **`push()`**: Adds one or more elements to the end of an array and returns the new length of the array.

   ```javascript
   const fruits = ["apple", "banana"];
   const newLength = fruits.push("cherry", "date");
   // fruits is now ["apple", "banana", "cherry", "date"]
   // newLength is 4
   ```

2. **`pop()`**: Removes the last element from an array and returns that element.

   ```javascript
   const fruits = ["apple", "banana", "cherry"];
   const removedFruit = fruits.pop();
   // removedFruit is "cherry" and fruits is ["apple", "banana"]
   ```

3. **`unshift()`**: Adds one or more elements to the beginning of an array and returns the new length of the array.

   ```javascript
   const fruits = ["banana", "cherry"];
   const newLength = fruits.unshift("apple", "date");
   // fruits is now ["apple", "date", "banana", "cherry"]
   // newLength is 4
   ```

4. **`shift()`**: Removes the first element from an array and returns that element.

   ```javascript
   const fruits = ["apple", "banana", "cherry"];
   const removedFruit = fruits.shift();
   // removedFruit is "apple" and fruits is ["banana", "cherry"]
   ```

5. **`concat()`**: Combines two or more arrays and returns a new array.

   ```javascript
   const colors1 = ["red", "green"];
   const colors2 = ["blue", "yellow"];
   const combinedColors = colors1.concat(colors2);
   // combinedColors is ["red", "green", "blue", "yellow"]
   ```

6. **`slice()`**: Returns a shallow copy of a portion of an array into a new array object.

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const sliced = numbers.slice(1, 4);
   // sliced is [2, 3, 4]
   ```

7. **`splice()`**: Adds or removes elements from an array at a specified index.

   ```javascript
   const fruits = ["apple", "banana", "cherry"];
   const removedFruit = fruits.splice(1, 1, "orange", "kiwi");
   // removedFruit is ["banana"] and fruits is ["apple", "orange", "kiwi", "cherry"]
   ```

8. **`join()`**: Combines all the elements of an array into a string and returns the string.

   ```javascript
   const colors = ["red", "green", "blue"];
   const joinedColors = colors.join(", ");
   // joinedColors is "red, green, blue"
   ```

9. **`indexOf()`**: Returns the first index at which a given element can be found in the array.

   ```javascript
   const fruits = ["apple", "banana", "cherry"];
   const index = fruits.indexOf("banana");
   // index is 1
   ```

10. **`lastIndexOf()`**: Returns the last index at which a given element can be found in the array.

    ```javascript
    const fruits = ["apple", "banana", "cherry", "banana"];
    const index = fruits.lastIndexOf("banana");
    // index is 3
    ```


11. **`forEach()`**: Executes a provided function once for each array element.

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   numbers.forEach(function(number) {
       console.log(number);
   });
   // Outputs: 1, 2, 3, 4, 5
   ```

12. **`map()`**: Creates a new array with the results of applying a function to each array element.

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const squared = numbers.map(function(number) {
       return number * number;
   });
   // squared is [1, 4, 9, 16, 25]
   ```

13. **`filter()`**: Creates a new array with elements that satisfy a specified condition.

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const evenNumbers = numbers.filter(function(number) {
       return number % 2 === 0;
   });
   // evenNumbers is [2, 4]
   ```

14. **`reduce()`**: Applies a function against an accumulator and each element in the array, reducing it to a single value.

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const sum = numbers.reduce(function(accumulator, currentValue) {
       return accumulator + currentValue;
   }, 0);
   // sum is 15
   ```

15. **`reduceRight()`**: Similar to `reduce()`, but processes the array from right to left.

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const reversedSum = numbers.reduceRight(function(accumulator, currentValue) {
       return accumulator + currentValue;
   }, 0);
   // reversedSum is 15
   ```

16. **`sort()`**: Sorts the elements of an array in place and returns the sorted array.

   ```javascript
   const fruits = ["cherry", "banana", "apple"];
   fruits.sort();
   // fruits is now ["apple", "banana", "cherry"]
   ```

17. **`reverse()`**: Reverses the order of the elements in an array in place.

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   numbers.reverse();
   // numbers is now [5, 4, 3, 2, 1]
   ```

18. **`find()`**: Returns the first element in the array that satisfies a provided testing function.

   ```javascript
   const numbers = [1, 3, 5, 7, 9];
   const evenNumber = numbers.find(function(number) {
       return number % 2 === 0;
   });
   // evenNumber is 0 
   ```

19. **`findIndex()`**: Returns the index of the first element in the array that satisfies a provided testing function.

   ```javascript
   const numbers = [1, 3, 5, 7, 9];
   const index = numbers.findIndex(function(number) {
       return number % 2 === 0;
   });
   // index is 1 (the first even number is at index 1)
   ```

20. **`includes()`**: Checks whether an array contains a specified element, returning `true` or `false`.

   ```javascript
   const fruits = ["apple", "banana", "cherry"];
   const containsBanana = fruits.includes("banana"); // containsBanana is true
   ```

21. **`every()`**: Checks if every element in an array passes a provided testing function.

   ```javascript
   const numbers = [2, 4, 6, 8, 10];
   const isEven = numbers.every(function(number) {
       return number % 2 === 0;
   });
   // isEven is true (all elements are even)
   ```

22. **`some()`**: Checks if at least one element in an array passes a provided testing function.

   ```javascript
   const numbers = [1, 3, 5, 8, 10];
   const hasEven = numbers.some(function(number) {
       return number % 2 === 0;
   });
   // hasEven is true (at least one element is even)
   ```

23. **`fill()`**: Changes all elements in an array with a provided value.

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   numbers.fill(0);
   // numbers is now [0, 0, 0, 0, 0]
   ```

24. **`flat()`**: Creates a new array with all sub-array elements concatenated into it recursively.

   ```javascript
   const nestedArray = [1, [2, [3, 4], 5]];
   const flattenedArray = nestedArray.flat(2); // The argument specifies the depth of flattening
   // flattenedArray is [1, 2, 3, 4, 5]
   ```

25. **`flatMap()`**: Maps each element using a function, then flattens the result into a new array.

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const squaredAndDoubled = numbers.flatMap(function(number) {
       return [number * number, number * 2];
   });
   // squaredAndDoubled is [1, 2, 4, 4, 9, 6, 16, 8, 25, 10]
   ```

26. **`isArray()`**: Checks if a value is an array.

   ```javascript
   const fruits = ["apple", "banana"];
   const isArrayFruits = Array.isArray(fruits); // isArrayFruits is true
   ```



   
