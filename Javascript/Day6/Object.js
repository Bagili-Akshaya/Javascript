let obj = {
    name : "abcd" , 
    id : 1 ,
    Boolean : true ,
    arr : [10,20,30] , 
    null : null ,
    undefined : undefined ,
    demo : function()
           {
            console.log("hello"); //using declarative
           }
}
console.log(obj);
console.log(obj.name);
console.log(obj.id);
obj.demo()

//using constructor function
function obj1 (name , id)
{
    this.name = name;
    this.id = id;
}
let p1 = new obj1("abc" , 1)
console.log(p1);
console.log(p1.name);
console.log(p1.id);



