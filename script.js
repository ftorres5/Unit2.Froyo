const userInputString = prompt("What froyo flavors would you like?");

const froyoFlavorsArray = userInputString.split(",");

const numberOfFlavors = {};
 
for (let i = 0; i < froyoFlavorsArray.length; i++) {
    let count = 0
    if (count[str]) {
        count[str] += 1;
    } else {
        count[str] = 1;
    }
}
 
console.log(numberOfFlavors);
console.log(froyoFlavorsArray);