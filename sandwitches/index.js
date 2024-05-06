function make_sandwiich(...items) {
    console.log(`Making a sandwich with: ${items.join(",")}.`);
}
make_sandwiich("ham", "cheese");
make_sandwiich("chicken", "tomato", "lettuce");
make_sandwiich("turkey", "avacado", "mustardd", "mayo");
export {};
