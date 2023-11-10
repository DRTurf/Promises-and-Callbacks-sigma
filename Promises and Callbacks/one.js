const arr=[1,2,3,4];

function callback(num){
    return num*2;
}

function doubleArray(arr,callback){
    const brr=[];
    for(let i=0;i<arr.length;i++){
        brr[i]=callback(arr[i]);
    }
    return brr;
}

console.log(doubleArray(arr,callback));