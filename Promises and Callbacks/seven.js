async function wait(){
    try{
        const todosData=await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const postDetailsData= await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const todos = await todosData.json();
        const postDetails=await postDetailsData.json();
        const obj={
            todo: todos,
            post: postDetails
        };
        console.log(obj);
    }
    catch(err){
        console.log(err);
    }
    
}

wait();