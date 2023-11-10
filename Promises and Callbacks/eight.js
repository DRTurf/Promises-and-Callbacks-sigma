fetch("https://jsonplaceholder.typicode.com/posts")
.then((value)=>{
    return value.json();
}).then((value)=>{
    console.log(value);
}).catch((err)=>{
    console.log(err);
})