// Display 4 films stored in an array
// Use a for loop to show each film in the array
// Create a function to check if the 3rd film is Ghostbusters
// If it is, return "Yay ghostbusters". If not return "Boo I want ghostbusters"

let films = [
    "LOTR",
    "Star Wars",
    "Ghostbusters",
    "Dune"
];

for(let i = 0; i < films.length; i++){
    console.log(films[i]);
}

const filmCheck = () => {
    if (films[2] == "Ghostbusters"){
        console.log("I ain't afraid of no ghost!");
    } else {
        console.log("Where's my ghostbustin :(")
    }
};

filmCheck();