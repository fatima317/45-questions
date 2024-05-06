let magicians = ['charlie', 'diana', 'james'];
function show_magician(magicians:string[]):void 
{
    console.log(magicians);
}; 

function make_great(magicians:string[]):string[] {
    let greatMagicians = magicians.map(magicians => `The Great ${magicians}`);
    return greatMagicians;
    }

let greatMagiciansNames = make_great([...magicians]);
show_magician(magicians);
show_magician(greatMagiciansNames);
