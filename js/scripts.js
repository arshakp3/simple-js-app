// Array of Pokemons, with their names, heights and types
let pokemonList = [
  {name: "Palkia", height: 4.2, type: ["dragon", "water"], ability: "Telepathy"},
  {name: "Dragonite", height: 2.2, type: ["dragon", "water"], ability: "Inner-focus, Multiscale"},
  {name: "Gengar", height: 1.5, type: ["ghost", "poison"], ability: "Levitate"}
  {name: "Zapdos", height: 1.6, type: ["psychic", "flying"], ability: "Lightningrod"},
]


document.write('<ul>')
for (let i = 0; i < pokemonList.length; i++){
  document.write('<li>')
  document.write(pokemonList[i].name + " - Height: " + pokemonList[i].height +"m");
  if (pokemonList[i].height > 1.7) document.write("  - Wow, thats tall!");
  document.write("</li>");
}
document.write("</ul>");
