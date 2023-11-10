function logString(string){
    console.log("The manipulated String is: "+string);
}

function manipulateString(string,logString){
    string=string.toUpperCase();    
    return logString(string);
}

manipulateString("hello, world!",logString);