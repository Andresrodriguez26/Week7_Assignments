//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
For extra credit, output "Thats a damn cat" 
*/

let dogString = "All dogs are good boys. Dogs named Precious can be annoying but are still good. Dogs named Shadow are usually majestic and cool.\
Sassy is a cat, but Chance is a dog. Can cat people be trusted? I don't know. Also Potato is a great dog name for a lil tiny stubby guy."

let dogNames = ["Fido", "Precious", "Sassy", "Gertrude", "Shadow", "Potato", "Bart"]

const lookingForDogo = (string, list_) => {
    for (let name of list_){
        if (string.includes(name)){
            return "Matched dog_name"
        } 
    }
    return "Thats a damn cat"
}

console.log(lookingForDogo(dogString, dogNames))


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index". For bonus points instead of inserting even index
replace each character with their signature move.*/

let arr = ["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"]

const dragonBall = array => {
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            array.splice(i, 1, "Signature Move")
        }
    }
}
dragonBall(arr);
console.log(arr);







