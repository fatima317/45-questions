let username = ["Admin", "Eric", "John", "Charlie", "Paul", "Rio"];
 username.forEach(username => {
    if (username === "Admin") {
        console.log("Hello admin, would you like to see a status report?"); 
}
else {
    console.log(`Hello ${username}, thank you for logging in again.`);  
}
 });