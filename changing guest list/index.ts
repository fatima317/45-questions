let invite: string[] = ["Syed Ahmed", "Muhammad Ali", "Akbar Azam"];
let guest = "Akbar Azam";
console.log(`${guest} can't make it to dinner.`);

// replace guest
invite.splice(2, 2, "Major Ahmed");

//new invite
invite.forEach(invite => {
    console.log(`Dear ${invite} You're cordially invited to join us for a dinner at our home.`);
});