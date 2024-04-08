"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//if exist gets value of key.
function Existence_Of_Key(data) {
    const map = new Map([
        ["Pakistan", "Islamabad"], //[key,value]
        ["Canada", "Ottawa"],
        ["Afghanistan", "Kabul"],
        ["Iran", "Tehran"],
    ]);
    //return map.has("Canada") 
    if (map.has("Canada")) {
        return map.get("Canada");
    }
    else {
        return undefined;
    }
}
console.log(Existence_Of_Key(Existence_Of_Key)); //Author-HUMA MOHSIN
