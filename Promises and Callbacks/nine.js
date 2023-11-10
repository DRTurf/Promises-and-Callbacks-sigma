fetch("https://jsonplaceholder.typicode.com/posts/123456789").then((response)=>{
    return response.json();
}).then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log(error);
})