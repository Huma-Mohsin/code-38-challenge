// //Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

// Explain & TIP: You can check for the presence of a key in a Map with the .has() method and retrieve its value with the .get() method.

//Solution.


function Existence_Of_Key(data:object){

    const map= new Map([
        ["Pakistan","Islamabad"],//[key,value]
        ["Canada","Ottawa"],
        ["Afghanistan","Kabul"],
        ["Iran","Tehran"],
        
    ])
    return map.has("Canada") 
    
}
       

console.log(Existence_Of_Key(Existence_Of_Key))//Author-HUMA MOHSIN