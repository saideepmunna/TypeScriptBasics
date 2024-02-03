let greetings: string = "Hello Saideep";

let myNum: number = 7;

greetings.toLowerCase()

let muNum2 = 8; //Type Inference - still works
console.log(greetings);

let hero;  // Here the hero has the type of any. That solely depends on the return value of the getHero().
//Ideally we should not use any as it makes our code turn off type. But the the whole purpose of using typescript is to add types.
function getHero(){
    return "thor"
}

hero = getHero();

export {};
