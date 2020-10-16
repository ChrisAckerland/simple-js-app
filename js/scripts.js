let pokemonRepository = (function () {
let pokemonList = [
  {
    name: "Seel",
    category: ["seaLion"],
    height: 3.07,
  },
  {
    name: "Mamoswine",
    category: ["twinTusk"],
    height: 8.02,
  },
  {
    name: "Whiscash",
    category: ["whiskers"],
    height: 2.11,
  },
  {
    name: "Camerupt",
    category: ["eruption"],
    height: 6.03,
    },
  {
    name: "Slaking",
    category: ["lazy"],
    height: 6.07,
  },
  {
    name: "Poochyena",
    category: ["bite"],
    height: 1.08
  },
  {
    name: "Rillaboom",
    category: ["drummer"],
    height: 6.11
  }
];
function add(pokemon) {
pokemonList.push(pokemon);
}
function getAll() {
  return pokemonList;
}
return {
  add: add,
  getAll: getAll,
};
})();
pokemonRepository.getAll().forEach(function(pokemon){
  document.write(pokemon.name + "- category: " + pokemon.category + "-" + " (height " + pokemon.height + ")" + "<br>");
});

