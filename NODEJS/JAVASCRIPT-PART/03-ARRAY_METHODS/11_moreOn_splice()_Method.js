const myFish = ["angel", "clown", "mandarin", "sturgeon", "salmon", "trout", "cod", "tuna", "bass", "pike", "catfish", "carp", "perch", "herring", "mackerel", "swordfish", "shark", "anchovy", "sardine", "eel"];

console.log("log-1, myFish before: ", myFish);

// 1. Remove 0 (zero) elements before index 2, and insert "drum"
myFish.splice(2, 0, "drum");
console.log("log-2, 1st splice result: ", myFish);
// Output: ["angel", "clown", "drum", "mandarin", "sturgeon", "salmon", "trout", "cod", "tuna", "bass", "pike", "catfish", "carp", "perch", "herring", "mackerel", "swordfish", "shark", "anchovy", "sardine", "eel"]

// 2. Remove 0 (zero) elements before index 2, and insert "drum"
myFish.splice(2, 0, "drum");
console.log("log-3, 2nd splice result: ", myFish);
// Output: ["angel", "clown", "drum", "drum", "mandarin", "sturgeon", "salmon", "trout", "cod", "tuna", "bass", "pike", "catfish", "carp", "perch", "herring", "mackerel", "swordfish", "shark", "anchovy", "sardine", "eel"]

// 3. Remove 0 (zero) elements before index 2, and insert "drum" and "guitar"
myFish.splice(2, 0, "drum", "guitar");
console.log("log-4, 3rd splice result: ", myFish);
// Output: ["angel", "clown", "drum", "guitar", "drum", "mandarin", "sturgeon", "salmon", "trout", "cod", "tuna", "bass", "pike", "catfish", "carp", "perch", "herring", "mackerel", "swordfish", "shark", "anchovy", "sardine", "eel"]

// 4. Remove 2 elements, starting from index 2
myFish.splice(2, 2);
console.log("log-5, 4th splice result: ", myFish);
// Output: ["angel", "clown", "mandarin", "sturgeon", "salmon", "trout", "cod", "tuna", "bass", "pike", "catfish", "carp", "perch", "herring", "mackerel", "swordfish", "shark", "anchovy", "sardine", "eel"]

// 5. Remove 1 element at index 2, and insert "trumpet"
myFish.splice(2, 1, "trumpet");
console.log("log-6, 5th splice result: ", myFish);
// Output: ["angel", "clown", "trumpet", "sturgeon", "salmon", "trout", "cod", "tuna", "bass", "pike", "catfish", "

// 6. Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"
myFish.splice(0, 2, "parrot", "anemone", "blue");
console.log("log-7, 6th splice result: ", myFish);
// Output: ["parrot", "anemone", "blue", "mandarin", "sturgeon", "salmon", "trout", "cod", "tuna", "bass", "pike", "catfish", "carp", "perch", "herring", "mackerel", "swordfish", "shark", "anchovy", "sardine", "eel"]

// 7. Remove 2 elements, starting from index 2
myFish.splice(2, 2);
console.log("log-8, 7th splice result: ", myFish);
// Output: ["parrot", "anemone", "trout", "cod", "tuna", "bass", "pike", "catfish", "carp", "perch", "herring", "mackerel", "swordfish", "shark", "anchovy", "sardine", "eel"]

// 8. Remove 1 element from index -2
myFish.splice(-2, 1);
console.log("log-9, 8th splice result: ", myFish);
// Output: ["parrot", "anemone", "trout", "cod", "tuna", "bass", "pike", "catfish", "carp", "perch", "herring", "mackerel", "swordfish", "shark", "sardine", "eel"]

// 9. Remove all elements, starting from index 2
myFish.splice(2);
console.log("log-10, 9th splice result: ", myFish);
// Output: ["parrot", "anemone"]
