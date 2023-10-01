function receivesAFunction(callBack){
    if(typeof callBack ==='function'){
        callBack ();
    }
}
function callback() {
    console.log("Hello there"); 
}
receivesAFunction(callback);
function returnsANamedFunction(){
    return receivesAFunction;
}
function receiveAfuction(callBack){
    callback();
}
function returnsAnAnonymousFunction(){
    return function (){
        console.log("This is an anonymous function");
    };
}
 