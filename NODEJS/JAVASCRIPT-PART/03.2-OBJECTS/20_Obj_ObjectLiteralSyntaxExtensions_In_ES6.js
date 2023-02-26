// Object property initializer shorthand
// Example 1
// Create an object with the same name and value for its properties
function createMachine(name, status) {
    return {
        name,
        status
    };
}

let machine_1 = createMachine('Computer', 'On');
console.log(machine_1); // {name: "Computer", status: "On"}

// Example 2
// Construct an object literal from local variables
let name_2 = 'Computer',
    status_2 = 'Off';

let machine_2 = {
   name: name_2,
   status: status_2
};

let machine_3 = {
   name_2,
   status_2
};

console.log(machine_2); // {name: "Computer", status: "Off"}
console.log(machine_3); // {name_2: "Computer", status_2: "Off"}


// Computed property name
// Example 1
// Use the square brackets to enable the computed property names for the properties on objects.
let name_4 = 'machine name';
let machine_4 = {
    [name_4]: 'server',
    'machine hours': 10000
};

console.log(machine_4[name_4]); // server
console.log(machine_4['machine hours']); // 10000

// Example 2
// Use an expression as a property name
let prefix_5 = 'machine';
let machine_5 = {
    [prefix_5 + ' name']: 'server',
    [prefix_5 + ' hours']: 10000
};

console.log(machine_5['machine name']); // server
console.log(machine_5['machine hours']); // 10000


// Concise  method syntax
// Example 1
// Define method for an object literal using the old syntax
let server_6 = {
    name: "Server",
    restart: function () {
        console.log("The" + this.name + " is restarting...");
    }
};

// Example 2
// Define method for an object literal using the concise method syntax
let server_7 = {
    name: 'Server',
    restart() {
        console.log("The" + this.name + " is restarting...");
    },
    'starting up'() {
        console.log("The " +  this.name + " is starting up!");
    }
};

server_7['starting up'](); // The Server is starting up!

/*
Output:
{ name: 'Computer', status: 'On' }
{ name_2: 'Computer', status_2: 'Off' }
{ name: 'Computer', status: 'Off' }
{ name_2: 'Computer', status_2: 'Off' }
server
10000
server
10000
The Server is starting up!
*/
