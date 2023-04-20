/**
 * has is used to trap "in" operator . has can be incredibly useful if you want to hide a particular property of an object 
 */

const resturant ={
    beer:5,
    soda:3
}

const restHandler ={
    has:function(target,property){
        if(property==="beer"){
            return false;
        }
        return property in target
    }
}
const restProxy =new Proxy(resturant,restHandler);

console.log("beer" in restProxy) //false 
console.log("soda" in restProxy)//true 
console.log("mango" in restProxy)//false even this does not exist inthe object 