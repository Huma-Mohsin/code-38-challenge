//if exist gets value of key.
function Existence_Of_Key(data:object){

    const map= new Map([
        ["Pakistan","Islamabad"],//[key,value]
        ["Canada","Ottawa"],
        ["Afghanistan","Kabul"],
        ["Iran","Tehran"],
        
    ])
    //return map.has("Canada") 
    if (map.has("Canada")) {

        return map.get("Canada");
    } 
    else {
       return undefined;
    }
}
       

console.log(Existence_Of_Key(Existence_Of_Key))//Author-HUMA MOHSIN