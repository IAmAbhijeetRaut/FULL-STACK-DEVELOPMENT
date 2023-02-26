// JavaScript Object.is()
// The Object.is() method determines whether two values are the same value.

// Negative zero
// The === operator considers -0 and +0 are the same value
let amount_1 = +0,
    volume_1 = -0;
console.log(amount_1 === volume_1); // Log_1: true

// However, the Object.is() method treats +0 and -0 as different values
let amount_2 = +0,
    volume_2 = -0;
console.log(Object.is(amount_2, volume_2)); // Log_2: false

// NaN
// The === operator considers NaN and NaN are different values
let quantity_1 = NaN;
console.log(quantity_1 === quantity_1); // Log_3: false

// However, Object.is() method treats NaN as the same value
let quantity_2 = NaN;
console.log(Object.is(quantity_2, quantity_2)); // Log_4: true


/*
Output:
true
false
false
true
*/









/* 
ameness comparison table : 

| X                      | y                      | ==    | ===   | Object.is | SameValueZero |
| ----------------------| ----------------------| ----- | ----- | --------- | ------------- |
| undefined              | undefined              | true  | true  | true      | true          |
| null                   | null                   | true  | true  | true      | true          |
| true                   | true                   | true  | true  | true      | true          |
| false                  | false                  | true  | true  | true      | true          |
| 'foo'                  | 'foo'                  | true  | true  | true      | true          |
| 0                      | 0                      | true  | true  | true      | true          |
| +0                     | -0                     | true  | true  | false     | true          |
| +0                     | 0                      | true  | true  | true      | true          |
| -0                     | 0                      | true  | true  | false     | true          |
| 0                      | false                  | true  | false | false     | false         |
| “ ”                    | false                  | true  | false | false     | false         |
| “ ”                    | 0                      | true  | false | false     | false         |
| '0'                    | 0                      | true  | false | false     | false         |
| 17                     | 17                     | true  | false | false     | false         |
| [1,2]                  | [1,2]                  | true  | false | false     | false         |
| new String('foo')      | 'foo'                  | true  | false | false     | false         |
| null                   | undefined              | true  | false | false     | false         |
| null                   | false                  | false | false | false     | false         |
| undefined              | false                  | false | false | false     | false         |
| { foo: 'bar' }         | { foo: 'bar' }         | false | false | false     | false         |
| new String('foo')      | new String('foo')      | false | false | false     | false         |
| 0                      | null                   | false | false | false     | false         |
| 0                      | NaN                    | false | false | false     | false         |
| 'foo'                  | NaN                    | false | false | false     | false         |
| NaN                    | NaN                    | false | false | true      | true          |



*/