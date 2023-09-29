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
receivesAFunction(callback);
function returnsAnAnonymousFunction(){
    return returnsAnAnonymousFunction;
}
