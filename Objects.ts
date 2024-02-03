const user = {
    name:"saideep",
    email:"saideep22@gmail.com",
    isActive: true
} // Bad way of creating objects

function createUser({name:string, isActive:boolean }){
    return {}
}

createUser({name:"saideep", isActive: true }) 
//BAD BEHAVIOUR OF TYPESCRIPT WHILE PASSING OBJECTS
//createUser({name:"saideep", isActive: true, email: "h@ca.com" }) throws an error 

let newUser= {name:"saideep", isActive: true, email: "h@ca.com" } 
createUser(newUser); //This does not throw an error


//To return Objects
function createCourse():{name:string, price:number}{
    return {name:"reactjs", price:399}
}


export {}