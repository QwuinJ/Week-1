// Create an array listing fave films, up to 5 elements
// Add two more using a method
// Use a loop to cycle through the array

let faveFilms = [
    "Back to the Future",
    "Dirty Dancing",
    "The Addams Family",
    "Emma",
    "When Harry Met Sally"
];

faveFilms.push("Lord of the Rings");
faveFilms.push("What We Do In The Shadows");

for(let i=0; i < faveFilms.length; i++){
    console.log(faveFilms[i]);
}