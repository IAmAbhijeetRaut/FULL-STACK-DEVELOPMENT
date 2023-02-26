// JavaScript globalThis

// Summary: in this tutorial, you’ll learn how to about the JavaScript `globalThis` object.

// Introduction to the JavaScript globalThis object
// ES2020 introduced the globalThis object that provides a standard way to access the global object across environments.

// Historically, JavaScript had a global object with different names in different environments.
// In web browsers, the global object is `window` or `frames`.
// The Web Workers API uses `self` as a global object.
// Node.js uses the `global` keyword to reference the global object.
// If you write JavaScript code that works across environments and needs to access the global object, you have to use different syntaxes like `window`, `frames`, `self`, or `global`.
// To standardize this, ES2020 introduced the `globalThis` that is available across environments.

// Example 1: Check if the current environment supports the Fetch API:
const canFetch = typeof globalThis.fetch === 'function';
console.log("Log_1: ", canFetch); // true

// Example 2: Check if globalThis is equal to window in a web browser
console.log("Log_2: ", globalThis === window); // true

// More examples:

// Example 3: Using globalThis in a web worker
if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
  console.log("Log_3: I'm a worker!");
} else {
  console.log("Log_3: I'm not a worker!");
}

// Example 4: Using globalThis in a Node.js environment
if (typeof process !== 'undefined' && process.release.name === 'node') {
  console.log("Log_4: I'm running in Node.js!");
} else {
  console.log("Log_4: I'm not running in Node.js!");
}

// Example 5: Polyfill for globalThis in older environments
if (typeof globalThis === 'undefined') {
  Object.defineProperty(Object.prototype, '__magic__', {
    get: function() {
      return this;
    },
    configurable: true,
  });

  __magic__.globalThis = __magic__; // lol

  delete Object.prototype.__magic__;
}
console.log("Log_5: ", globalThis); // Window { ... }

/*
Output:
Log_1:  true
Log_2:  true
Log_3: I'm not a worker!
Log_4: I'm not running in Node.js!
Log_5:  Window { ... }
*/

// More examples:

// Example 1: Using globalThis in a React application

// In a React application, you can use globalThis to access the global object in a way that works across environments.

// Define a global variable in your React app
globalThis.myVar = 'Hello, world!';

// Use the global variable in your component
function MyComponent() {
  return <div>{globalThis.myVar}</div>;
}

// Example 2: Using globalThis in a Node.js module

// In a Node.js module, you can use globalThis to access the global object in a way that works across environments.

// Define a global variable in your Node.js module
globalThis.myVar = 'Hello, world!';

// Use the global variable in your module exports
module.exports = function() {
  console.log(globalThis.myVar);
};

// Example 3: Using globalThis to detect the current environment

// You can use globalThis to detect the current environment and adjust your code accordingly.

if (globalThis === window) {
  // Running in a web browser
  console.log('Running in a web browser');
} else if (typeof process !== 'undefined' && process.release.name === 'node') {
  // Running in Node.js
  console.log('Running in Node.js');
} else if (typeof importScripts === 'function') {
  // Running in a web worker
  console.log('Running in a web worker');
} else {
  // Unknown environment
  console.log('Unknown environment');
}

// Example 4: Using globalThis to extend the global object

// You can use globalThis to extend the global object with new properties and methods.

// Define a new property on the global object
globalThis.myProp = 'Hello, world!';

// Define a new method on the global object
globalThis.myMethod = function() {
  console.log('Hello, world!');
};

// Use the new property and method
console.log(globalThis.myProp); // Hello, world!
globalThis.myMethod(); // Hello, world!


// Example 5: Using globalThis to define a global constant

// You can use globalThis to define a global constant that is available across environments.

// Define a global constant
Object.defineProperty(globalThis, 'MY_CONST', {
  value: 'Hello, world!',
  writable: false,
  enumerable: true,
  configurable: false,
});

// Use the global constant
console.log(MY_CONST); // Hello, world!
