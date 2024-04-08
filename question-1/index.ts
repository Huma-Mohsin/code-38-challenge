//Question 112, Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.
// Explain & TIP, The Map object in JavaScript holds key,value pairs and remembers the original insertion order of the keys. It can be more efficient for large sets of data and when the key is not a string.

//Solution:-

//In TypeScript , a Map is a collection of key-value pairs where each key is unique.

//The Map is a built-in data structure in JavaScript and TypeScript, introduced in ECMAScript 6 (ES6). It provides a way to store key-value pairs where keys can be of any data type (primitive values, objects, or even functions), and values can be of any type as well.

//The syntax for creating a Map in JavaScript/TypeScript is as follows,
//const myMap = new Map();

const map = new Map ([
  ["Russia", "Moscow"],
  ["Qatar", "Doha"],
  ["France", "Paris"],
  ["Switzerland", "Bern"],
  ["Spain", "Madrid"],
  ["SriLanka", "Colombo"],
  ["SaudiArabia", "Riyadh"],
]);
console.log("Previous map:", map);

//you can use the set() method to add or update key-value pairs in the Map after creation
map.set("Norway", "Oslo");
map.set("New Zealand", "Wellington");
map.set("Japan", "Tokyo");
console.log("updated map:", map);

//To retrieve a value from the Map, you can use the get() method:
//const retrievedValue = myMap.get(key);//syntax

const getvalue = map.get("Switzerland");
console.log("Retrieve Value As:", getvalue); //Author-HUMA MOHSIN
//(Note: Make changes in tsconfig file to support Map data structure)
