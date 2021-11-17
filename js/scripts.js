// Array of Pokemons, with their names, heights and types
//IIFE START
let pokemonRepository = (function () {
let pokemonList = [
  {name: "Palkia", height: 4.2, type: ["dragon", "water"], ability: "Telepathy"},
  {name: "Dragonite", height: 2.2, type: ["dragon", "water"], ability: "Inner-focus, Multiscale"},
  {name: "Gengar", height: 1.5, type: ["ghost", "poison"], ability: "Levitate"}
  {name: "Zapdos", height: 1.6, type: ["psychic", "flying"], ability: "Lightningrod"},
]
//returns the pokemonList array
function getAll() {
    return pokemonList;
};

//adds new data to the pokemonList array
function add(pokemonData) {
    pokemonList.push(pokemonData);
};

return {
  getAll: getAll,
  add: add
};

//IIFE END.
})();

document.write('<ul>')
//define data to new variables using getAll()
pokemonRepository.getAll().forEach(function(pokemonData){
  let pokemonName = pokemonData.name
  let pokemonHeight = pokemonData.height
  let PokemonType = pokemonData.type
  //Write to the document.
  document.write('<li>');
  document.write(pokemonName + " - Height: " + pokemonHeight +"m");
  if (pokemonHeight > 1.7) document.write("  - Wow, thats tall!");
  document.write("</li>");
  });
  document.write("</ul>");
