// JavaScript Object.assign()

// Summary: in this tutorial, you will learn how to use the JavaScript Object.assign() method in ES6.

// The Object.assign() copies all enumerable and own properties from the source objects to the target object. It returns the target object.

// Using JavaScript Object.assign() to clone an object

// The following example uses the Object.assign() method to clone an object.

let widget = {
    color: 'red'
};

let clonedWidget = Object.assign({}, widget);

console.log(clonedWidget); // Log_1: { color: 'red' }

// Note that the Object.assign() only carries a shallow clone, not a deep clone.

// Using JavaScript Object.assign() to merge objects

// The Object.assign() can merge source objects into a target object which has properties consisting of all the properties of the source objects. For example:

let box = {
    height: 10,
    width: 20
};

let style = {
    color: 'Red',
    borderStyle: 'solid'
};

let styleBox = Object.assign({}, box, style);

console.log(styleBox); // Log_2: { height: 10, width: 20, color: 'Red', borderStyle: 'solid' }

// If the source objects have the same property, the property of the later object overwrites the earlier one:

let box1 = {
    height: 10,
    width: 20,
    color: 'Red'
};

let style1 = {
    color: 'Blue',
    borderStyle: 'solid'
};

let styleBox1 = Object.assign({}, box1, style1);

console.log(styleBox1); // Log_3: { height: 10, width: 20, color: 'Blue', borderStyle: 'solid' }

// Summary:

// - `Object.assign()` assigns enumerable and own properties from a source object to a target object.
// - `Object.assign()` can be used to clone an object or merge objects.

/*
Output:

Log_1: { color: 'red' }
Log_2: { height: 10, width: 20, color: 'Red', borderStyle: 'solid' }
Log_3: { height: 10, width: 20, color: 'Blue', borderStyle: 'solid' }
*/

