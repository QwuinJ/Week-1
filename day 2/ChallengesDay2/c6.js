
function findLastVowel(string) {
    let vowels = ["a", "e", "i", "o", "u"];
    let lastPos = -1

    for (let vowel of vowels.values()) {
        if (string.lastIndexOf(vowel) > lastPos) {
            lastPos = string.lastIndexOf(vowel);
        }
    }
    console.log(`The last vowel is at position ${lastPos}`);
}

findLastVowel("hdsajlhfjahgkjsahfjkhdsiuahfjewhoqjijkalfsjkasjfkdjasljk");
findLastVowel("immmmmm");
findLastVowel("bbbi");
findLastVowel("jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi")

