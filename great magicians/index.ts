let magicians = ['charlie', 'diana', 'james'];
function show_magician(magicians:string[]) {
    magicians.forEach(magicians => 
{
    console.log(magicians );
}); 
}
function make_great(magicians:string[] ) {
    for (let i = 0; i<magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians);
show_magician(magicians);