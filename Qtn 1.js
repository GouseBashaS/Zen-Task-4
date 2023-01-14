//How to compare two JSON have the sameproperties without order?
let obj1 = {
    name:"person 1",
    age:5
}
 let obj2 = {
    age:5,
    name:"person 1"
}
 console.log(_.isEqual(obj1, obj2));
 console.log("#".repeat(100));