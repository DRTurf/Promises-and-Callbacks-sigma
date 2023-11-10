function greeting(name){
    return new Promise((resolve, reject) => {
        resolve(`Hello ${name}`);
    })
}
greeting("Mithun").then((value) =>{
    console.log(value);
})
