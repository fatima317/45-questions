//version that passes
let alien_colour = "green";

if (alien_colour === "green") {
    console.log("You earned 5 points!");
}
//version that fails(no output)
alien_colour = "red";

if (alien_colour === "green") {
    // no output
}
