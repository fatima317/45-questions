"use strict";
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi"); //default country
describe_city("Lahore"); //default country
describe_city("Riyadh", "Saudia Arabia");
