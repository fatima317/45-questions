let magicians = ['charlie', 'diana', 'james'];
function show_magician(magicians) {
    magicians.forEach(magicians => {
        console.log(magicians);
    });
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians);
show_magician(magicians);
export {};
