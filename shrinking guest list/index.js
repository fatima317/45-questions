let invite = ["Salar Sikandar", "Syed Ahmed", "Fais Ghazi", "Muhammad Ali", "Major Ahmed", "Mahir Fareed"];
console.log("Unfortunately, I can invite only two people for dinner.");
// readjust guest list
while (invite.length > 2) {
    let removeGuest = invite.pop();
    console.log(`Sorry ${removeGuest}, your'e not invited for dinner.`);
}
invite.forEach(invite => {
    console.log(`Dear ${invite} You're still invited to join us for a dinner at our home.`);
});
invite.splice(0, invite.length);
console.log(invite); // empty list
export {};
