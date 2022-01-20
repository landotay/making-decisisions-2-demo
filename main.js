let backpack = []

//.push adds an item to an array
backpack.push("Sword")
backpack.push("Sheild")
backpack.push("Food")

// .shift removes first item in an array
//backpack.shift()

//.splice removes items in an array in the locations listed
backpack.splice(0 , 1)

let furCoat = "Fur Coat"

backpack.push(furCoat)

//.pop removes last item in an array
backpack.pop(backpack)

//.length will add a count of items in an array after it is printed
let itemCount = backpack.length

//console.log(itemCount)

backpack.push("flint", "blanket", "knife", "toothbrush")

let backpack2 = backpack.splice(3 , 3)

//these loops are dynamic, they will show all items in the array
// for(let  i = 0; i < backpack.length; i++){
//     console.log('This is an iteration of our loop, and this is the current element of the array:', backpack[i])
// }

// for(let i = 0; i <= backpack2.length -1; i++ ){
//     console.log(backpack2[i])
// }
backpack2.push('hat')

// for(let i =0; i < 3; i++){
//     console.log(backpack2[i])
// }

// if(backpack.length >= 3){
//     or(let i =0; i < 3; i++){
//         console.log(backpack[i])
// }else{
//     for(let i = 0; i < backpack.length; i++){
//         console.log(backpack[i])
//     }
// }



// What is the final value of guessMe?

let guessMe = 54

while (guessMe < 100) {
    if (guessMe % 4 == 0 || guessMe % 5 == 0) {
        guessMe += 25
    } else if (guessMe % 3 == 0) {
        guessMe -= 27
    } else {
        guessMe += 3
    }
    guessMe += 22
}