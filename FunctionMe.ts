function addTwo(num) {
  //for functions mentioning types is compulsory as passing a string here doesn't throw error
  return num + 2;
}

addTwo("saideep");

function addThree(num: number) {
  return num + 3;
}

addThree(5); // throws error if passed string or any other type

function toUpper(str: string) {
  return str.toUpperCase();
}

toUpper("HELLO");

let loginUser = (
  name: string,
  email: string,
  isPaid: boolean = false
): string => {
  // same applies for arrow functions. All the arguments has to be passed as mentioned in the function else it throws an error. You can declare it in the fun declaration itself if not passed while calling
  return `Im ${name} and my email is ${email}`;
};
loginUser("saideep", "saideep@gmail.com");

//To type strict the return type

function myHero(): string {
  return "Iron-Man"; //return 1 throws an error
}

//TypeScript is smart enough to know the context that we are passing in the map function no need to mention type

const heros = ["hulk", "spiderman", "captainmarvel"];

heros.map((hero): string => `Hero is ${hero}`); // Here the hero is automatically typed as string and to safe the return type give (hero):string

// function isAbove(val:number): string{
//     if(val>18){
//         return true;
//     }
//     else{
//         return "200 OK"
//     }
// }// Here the function returns either a boolean value or a string. We will leran how to handle this

//VOID AND NEVER

function consoleError(errMsg: string): void {  //returns nothing
  console.log(errMsg);
}

function handleError(errMsg: string): never{  //similar to Void but throws an error. It gracefully handles errors
    throw new Error(errMsg)
  }