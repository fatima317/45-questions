let invite: string[] = ["Syed Ahmed", "Muhammad Ali", "Major Ahmed"];
console.log("Great news! I found a bigger dinner table!");

// add more guests
invite.unshift("Salar Sikandar");
invite.splice(2, 0, "Faris Ghazi");
invite.push("Mahir Fareed");

//invitation
invite.forEach(invite => {
    console.log(`Dear ${invite} You're cordially invited to join us for a dinner at our home.`);
});