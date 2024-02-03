type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  return user;
}

createUser({ name: "saideep", email: "saideep@ca.com", isActive: true });


// It is really useful when we have more values in an object, then its east to declare in a function


//READONLY AND OPTION


type myUser = {
  readonly _id: string
  name: string
  email: string
  isActive: boolean
}


let saideepGoud: myUser ={
  _id:"12345",
  name: "Saideep",
  email: "saiddep@gmail.com",
  isActive:false
} 


saideepGoud.name= "Virat";

export {}