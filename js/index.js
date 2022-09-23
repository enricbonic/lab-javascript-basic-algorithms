console.log("I'm ready")
// Iteration 1: Names and Input
//
let hacker1 = "Driviero"
let hacker2 = "Navigatore"

    console.log(`The driver's name is ${hacker1}`)
    console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
function isLonger(){
    if (hacker1.length > hacker2.length){
        return `The driver has the longest name, it has ${hacker1.length} characters.` 
    } else if (hacker1.length < hacker2.length){
        return `It seems that the navigator has the longest name, it has ${hacker2.length} charcaters.` 
    } else{
       return  `Wow, you both have equally long names, ${hacker1.lengths} characters!`
    }
}
console.log(isLonger())

// Iteration 3: Loops
const array31 = hacker1.toUpperCase().split("").join(' ')
console.log(array31);
const array32 = hacker1.split("").reverse().join("")
console.log(array32);
const array33 = [hacker1, hacker2]
const array331 = array33.sort();
console.log(`-${array331[0]} goes first.`)

    
    


