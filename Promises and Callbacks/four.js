const books=[{
    title:"A",
    author:"John",
    year:1
},
{
    title:"C",
    author:"Jerry",
    year:2
},
{
    title:"D",
    author:"Harry",
    year:3
},
{
    title:"B",
    author:"Darry",
    year:4
}]

function callBack(titles){
    console.log(titles.sort())
}

function sorting(books,callBack){
    const titles=books.map((ele)=>{
        return ele.title;
    })
   return callBack(titles)
}

sorting(books,callBack);