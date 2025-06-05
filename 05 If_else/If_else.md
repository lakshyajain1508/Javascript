# if/else Statement

In JavaScript, the `if/else` statement is used to make decisions in your code based on a condition. It allows you to execute one block of code if a certain condition is true and another block of code if the condition is false. Here's the basic syntax of the `if/else` statement:

```javascript
if (condition) {
    // Code to execute if the condition is true
} else {
    // Code to execute if the condition is false
}
```

Here's a breakdown of how it works:

1. The `if` keyword is followed by an expression enclosed in parentheses. This expression is the condition you want to evaluate. If the condition is true, the code inside the first block (enclosed by curly braces) will be executed. If the condition is false, the code inside the `else` block (enclosed by curly braces) will be executed.

2. You can omit the `else` block if you only want to execute code when the condition is true. In that case, if the condition is false, nothing will be executed.

Here's an example:

```javascript
let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are not an adult.");
}
```

In this example, if the `age` is greater than or equal to 18, it will print "You are an adult." Otherwise, it will print "You are not an adult."

You can also have multiple `if` conditions using `else if`:

```javascript
let score = 75;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else {
    console.log("F");
}
```

This code will evaluate the `score` variable and print the corresponding grade based on the value of `score`.

## if statement
### Syntax
```
if (test_condition) {
    // if statement body
}
```
***
```js
const score = parseInt(prompt('Enter your marks:'));

if (score >= 50) {
    console.log('You have passed your exams.');
    console.log('Congratulations.');
}
```
**Output**
```
Enter your marks: 80
You have passed your exams.
Congratulations.
```
***

## Multiple if statement
```js
const score = parseInt(prompt('Enter your marks:'));

if (score >= 50) {
    console.log('You have passed your exams.');
    console.log('Congratulations.');
}

if (score < 50) {
    console.log('Sorry, you failed your exam.');
}
```
**Output**
```
Enter your marks: 40
Sorry, you failed your exam.
```
***
## if...else Statement
### Syntax
```
if (condition) {
  // code inside if block
}
else {
  // code inside else block
}
```
***
```js
const score = 40;

if (score >= 50) {
    console.log('You have passed your exams.');
    console.log('Congratulations.');
}

else {
    console.log('Sorry, you failed your exam.');
}
```
**Output**
```
Sorry, you failed your exam.
```
***
## else if Statement
### Syntax
```
if (test_condition1) {
    // statements1
}
else if (test_condition2){
    // statements2
}
else {
    // statements3
}
```
***
```js
const score = 40;

if (score > 100) {
    console.log('Score is invalid');
}

else if ( score < 0) {
  console.log('Score is invalid');
}

else if (score >= 50) {
    console.log('You have passed your exams.');
    console.log('Congratulations.');
}
else {
    console.log('Sorry, you failed your exam.');
}
```
**Output**
```
Sorry, you failed your exam.
```
***
```js
const score = -45;

if (score > 100) {
    console.log('Score is invalid');
}

else if ( score < 0) {
  console.log('Score is invalid');
}

else if (score >= 50) {
    console.log('You have passed your exams.');
    console.log('Congratulations.');
}
else {
    console.log('Sorry, you failed your exam.');
}
```
**Output**
```
Score is invalid
```
***
### Logical OR operator
```js
const score = -45;

if (score > 100 || score < 0) {
    console.log('Score is invalid');
}

else if (score >= 50) {
    console.log('You have passed your exams.');
    console.log('Congratulations.');
}
else {
    console.log('Sorry, you failed your exam.');
}
```
**Output**
```
Score is Invalid.
```