let fav_places : string[] = ["Makkah", "Medina", "Turkey", "Palestine", "Dubai"];
console.log("Original order:",fav_places);

console.log("Alphabetical order:", [...fav_places].sort());

console.log("Original order:",fav_places);

console.log("Reverse Alphabetical order:", [...fav_places].sort().reverse());

console.log("Original order:",fav_places);

fav_places.reverse();
console.log("Reversed order:", fav_places);

fav_places.sort();
console.log("Alphabetical order:", fav_places);

fav_places.reverse();
console.log("Reversed Alphabetical order:", fav_places);

