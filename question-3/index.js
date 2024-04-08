"use strict";
//Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Iterating over a Map can be done using the .forEach() method or a for...of loop, providing access to each key-value pair.
//Solution.
const Candidate = new Map(); //here shows key is in number while value is string.
//Adding candidates.
Candidate.set(1001, "Kate");
Candidate.set(1002, "Tiara");
Candidate.set(1003, "Edward");
Candidate.set(1004, "Paul");
Candidate.set(1005, "Charles");
// providing access to each key-value pair.
console.log("Candidate As Below");
for (const [key, value] of Candidate) {
    //log results.
    console.log(`ID: ${key}, Name: ${value}`);
} //Author-HUMA MOHSIN
