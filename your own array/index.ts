let transport: string[] = ["Tesla car", "Mercedes car", "Ford car"];
for (let index = 0; index < transport.length; index++) {
console.log(`I would like to own a ${transport[index]}.`);
}

 //2nd method using function 
let transports: string[] = ["Tesla car", "Mercedes car", "Ford car"];
transports.forEach(transport => {
console.log(`I would like to own a ${transport}.`);
});