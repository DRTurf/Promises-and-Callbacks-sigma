const person={
    firstName: 'John',
    lastName: 'Doe',
    age: 20
}

function logResult(name,age){
    console.log(`This person's fullname is ${name} and age in days is ${age}.`);
}

function ageInDays(person,logResult){
    const name=person.firstName+" "+person.lastName;
    const age=person.age*365;
    return logResult(name,age);
}

ageInDays(person,logResult);