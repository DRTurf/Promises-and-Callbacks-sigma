fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((value)=>{
    return value.json()
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})
