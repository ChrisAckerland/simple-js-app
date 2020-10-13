//pokemonList array
let pokemonList = [
  {
    name: "Seel",
    height: 3.07,
    weight: 198.4,
    category: "seaLion",
    abilities: ["thickFat", "hydration"],
    types: ["water"],
    weaknesses: ["grass", "electric"],
  },
  {
    name: "Mamoswine",
    height: 8.02,
    weight: 641.5,
    category: "twinTusk",
    abilities: ["oblivious", "snowCloak"],
    types: ["ice", "ground"],
    weaknesses: ["steel", "fire", "grass", "water", "fighting"],
  },
  {
    name: "Whiscash",
    height: 2.11,
    weight: 52.0,
    category: "whiskers",
    abilities: ["oblivious", "anticipation"],
    types: ["water", "ground"],
    weaknesses: ["grass"],
  },
  {
    name: "Camerupt",
    height: 6.03,
    weight: 485.0,
    category: "eruption",
    abilities: ["magmaArmor", "solidRock"],
    types: ["fire", "ground"],
    weaknesses: ["water", "ground"],
  },
  {
    name: "Slaking",
    height: 6.07,
    weight: 287.7,
    category: "lazy",
    abilities: ["truant"],
    types: ["normal"],
    weaknesses: ["fighting"],
  },
  {
    name: "Poochyena",
    height: 1.08,
    weight: 30.0,
    category: "bite",
    abilities: ["runAway", "quickFeet"],
    types: ["dark"],
    weaknesses: ["fairy", "bug", "fighting"],
  },
  {
    name: "Rillaboom",
    height: 6.11,
    weight: 198.4,
    category: "drummer",
    abilities: ["overgrow"],
    types: ["grass"],
    weaknesses: ["fire", "flying", "ice", "poison", "bug"],
  }
];
//For loop iterating each item in pokemonList
for (let i = 0; i < pokemonList.length; i++) {
  document.write(pokemonList[i].name);
if (pokemonList[i].height >=6){
    document.write(" - (height: " + pokemonList[i].height + ") - wow, that's big!</br>");
  }else if (pokemonList[i].height <=3){
  document.write(" - (height: " + pokemonList[i].height + ") - that's small!</br>");
  }else {
  document.write(" - (height: " + pokemonList[i].height + ") - pretty average.</br>");
  }
}
