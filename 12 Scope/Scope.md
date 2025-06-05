## Scope

In JavaScript, scope refers to the context in which variables and functions are declared, defined, and accessible. It determines the visibility and lifetime of these identifiers. Understanding scope is crucial for writing well-structured and bug-free JavaScript code. JavaScript has two main types of scope: local (function) scope and global scope.

1. **Local (Function) Scope**:
   - Variables declared within a function are said to have local scope. These variables are accessible only within the function where they are defined.
   - Local scope is created every time a function is called. This means that variables with the same name can exist in different function calls without interfering with each other.

   ```javascript
   function myFunction() {
       var localVar = 5; // localVar has local scope
       console.log(localVar); // Accessible within the function
   }

   myFunction();
   console.log(localVar); // Throws an error - localVar is not defined
   ```

   - Variables declared without the `var`, `let`, or `const` keyword inside a function become global variables, which are accessible throughout the entire script. This should be avoided to prevent polluting the global scope.

   ```javascript
   function createGlobalVariable() {
       globalVar = "I'm a global variable"; // Avoid creating global variables like this
   }
   createGlobalVariable();
   console.log(globalVar); // Accessible globally
   ```

2. **Global Scope**:
   - Variables declared outside of any function or block have global scope. They are accessible from anywhere in the script.

   ```javascript
   var globalVariable = 10; // globalVariable has global scope
   function myFunction() {
       console.log(globalVariable); // Accessible within the function
   }

   myFunction();
   console.log(globalVariable); // Accessible globally
   ```

3. **Block Scope (ES6)**:
   - Introduced in ECMAScript 6 (ES6), the `let` and `const` keywords create block-scoped variables, meaning they are only accessible within the block in which they are defined.

   ```javascript
   if (true) {
       let blockScopedVar = 42; // blockScopedVar has block scope
   }
   console.log(blockScopedVar); // Throws an error - blockScopedVar is not defined
   ```

4. **Nested Scope**:
   - Functions can be nested within other functions, creating nested or lexical scope. Inner functions can access variables from their parent functions, but the reverse is not true.

   ```javascript
   function outer() {
       var outerVar = "I'm in outer scope";
       
       function inner() {
           console.log(outerVar); // Accessible due to nested scope
       }
       
       inner();
   }
   outer();
   ```

5. **Scope Chain**:
   - JavaScript uses a mechanism called the "scope chain" to resolve variable references. When a variable is accessed, the interpreter first looks in the current scope. If the variable is not found, it continues searching in the outer (enclosing) scope, and so on until it reaches the global scope.
   
   ```javascript
   var globalVar = "I'm global";

   function outer() {
       var outerVar = "I'm in outer scope";

       function inner() {
           console.log(globalVar); // Accessible via scope chain
           console.log(outerVar); // Accessible via scope chain
       }

       inner();
   }

   outer();
   ```

Understanding the scope in JavaScript is crucial for writing clean and bug-free code. Properly managing the scope of variables and functions helps avoid naming conflicts, enhances code organization, and ensures that your code behaves as expected.