

const names = ["Valborg" , "Vidar" , "Veronika" , "Vibeke" , "Ida" , "Filip" , "Felix" , "Adrian" , "Ella" , "Svein" , "Ayberk" , "John" , "Mumie" , "Shakira"];
console.log(names.length);

const greeter = (name) => `Hello ${name}, have a good day!`;

for (let i = 0; i < names.length; i++) {
    console.log(greeter(names[i]));
}




// Oppgave: skriv om const greeter til en funksjon greeter
// function greeter() {
// }

anotherArrey= ["Tom" , "Sarah" , "Jimmy"]

function wordCleaner(arr) {
let cleanedArr = [];
for (word of arr) {
    console.log(word);
    cleanedArr.push(word.toUpperCase());
}
return cleanedArr;
}
console.log(wordCleaner(anotherArrey));

let stringArrayReverser = (arr) => {
    if (arr.length < 10 || arr.length > 100)
        return "Array is too short or too long";
    let reversedArray = [];
    for (let i = 0; i < arr.length; i++) {
        reversedArray.push(arr[i].split("").reverse().join(""));
    }
    return reversedArray
}

console.log(stringArrayReverser([
    "Lemon",
    "Mangos",
    "Apple",
    "Pear",
    "Grapes",
    "Kiwi",
    "Fig",
    "Peach",
    "Grapefruit",
    "Watermelon",
    "Orange",
    "Banana",]))


    function generatePassword(len) {
        let passord ="";
        while (passprd.lenght < len) {
            password +=
            String.fromCharCode(Math.floor(Math.random() * 87) + 35)
    }
    return password;
}

console.log(generatePassword(50))

        
    