const password = "password1234"

if (`${password.length}` < 8){
    console.log("too short");
}
else {
    console.log(`${password}`);
}