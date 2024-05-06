function make_shirt(size, message = "I love Typescript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirt("large"); // default message
make_shirt("medium"); //default message
make_shirt("small", "Code is Life"); // new message
export {};
