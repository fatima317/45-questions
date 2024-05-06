let current_users = ["John", "Eric", "Paul", "Rio", "Danny"];
let new_users = ["JOHN", "Sandy", "rio", "Jack", "Leo"];
new_users.forEach(newUser=> {
    if (current_users.some(currentUsers => currentUsers.toLowerCase() === newUser.toLowerCase())) {
     console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available.`);
    } 
});