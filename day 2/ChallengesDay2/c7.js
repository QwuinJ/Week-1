// create if statement to check if last letter = first
// if yes return yes
// if no return no

function letterCheck (string) {
    let firstLetter = string.charAt(0);
    let lastLetter = string.charAt(string.length-1);
    if (firstLetter != lastLetter) {
        return false;
    } else {
        return true;
    }
}

console.log(letterCheck("tut"));
