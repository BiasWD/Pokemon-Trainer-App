export const Water = {
  name: "Water",
  superEffective: ["Ground", "Rock", "Fire"],
  notVeryEffective: ["Water", "Grass", "Dragon"],
  noEffect: [""],
  weakTo: ["Grass", "Electric"],
  resists: ["Steel", "Fire", "Water", "Ice"],
  immuneTo: [""],
  color: "#2980EF",
};
export const Fire = {
  name: "Fire",
  superEffective: ["Bug", "Steel", "Grass", "Ice"],
  notVeryEffective: ["Rock", "Fire", "Water", "Dragon"],
  noEffect: [""],
  weakTo: ["Ground", "Rock", "Water"],
  resists: ["Bug", "Steel", "Fire", "Grass", "Ice"],
  immuneTo: [""],
  color: "#E62829",
};
export const Grass = {
  name: "Grass",
  superEffective: ["Ground", "Rock", "Water"],
  notVeryEffective: [
    "Flying",
    "Poison",
    "Bug",
    "Steel",
    "Fire",
    "Grass",
    "Dragon",
  ],
  noEffect: [""],
  weakTo: ["Flying", "Poison", "Bug", "Fire", "Ice"],
  resists: ["Ground", "Water", "Grass", "Electric"],
  immuneTo: [""],
  color: "#3FA129",
};

export const Electric = {
  name: "Electric",
  superEffective: ["Water", "Flying"],
  notVeryEffective: ["Electric", "Dragon", "Grass"],
  noEffect: ["Ground"],
  weakTo: ["Ground"],
  resists: ["Electric", "Flying", "Steel"],
  immuneTo: [""],
  color: "#F4D03F",
};

export const Normal = {
  name: "Normal",
  superEffective: [],
  notVeryEffective: ["Rock", "Steel"],
  noEffect: ["Ghost"],
  weakTo: ["Fighting"],
  resists: [],
  immuneTo: ["Ghost"],
  color: "#AAAA99",
};

export const Ice = {
  name: "Ice",
  superEffective: ["Ground", "Flying", "Dragon", "Grass"],
  notVeryEffective: ["Fire", "Water", "Ice", "Steel"],
  noEffect: [],
  weakTo: ["Fire", "Fighting", "Rock", "Steel"],
  resists: ["Ice"],
  immuneTo: [],
  color: "#3DCEF3",
};

export const Fighting = {
  name: "Fighting",
  superEffective: ["Normal", "Ice", "Rock", "Steel", "Dark"],
  notVeryEffective: ["Flying", "Psychic", "Fairy", "Bug", "Poison"],
  noEffect: ["Ghost"],
  weakTo: ["Flying", "Psychic", "Fairy"],
  resists: ["Bug", "Rock", "Dark"],
  immuneTo: [],
  color: "#FF8000",
};

export const Poison = {
  name: "Poison",
  superEffective: ["Grass", "Fairy"],
  notVeryEffective: ["Poison", "Ground", "Rock", "Ghost"],
  noEffect: ["Steel"],
  weakTo: ["Ground", "Psychic"],
  resists: ["Grass", "Fairy", "Fighting", "Poison", "Bug"],
  immuneTo: [],
  color: "#9B4F96",
};

export const Ground = {
  name: "Ground",
  superEffective: ["Fire", "Electric", "Poison", "Rock", "Steel"],
  notVeryEffective: ["Grass", "Bug"],
  noEffect: ["Flying"],
  weakTo: ["Water", "Ice", "Grass"],
  resists: ["Poison", "Rock"],
  immuneTo: ["Electric"],
  color: "#915121",
};

export const Flying = {
  name: "Flying",
  superEffective: ["Bug", "Fighting", "Grass"],
  notVeryEffective: ["Electric", "Rock", "Steel"],
  noEffect: [],
  weakTo: ["Electric", "Ice", "Rock"],
  resists: ["Bug", "Fighting", "Grass"],
  immuneTo: ["Ground"],
  color: "#A9C8F9",
};

export const Psychic = {
  name: "Psychic",
  superEffective: ["Fighting", "Poison"],
  notVeryEffective: ["Steel", "Psychic"],
  noEffect: ["Dark"],
  weakTo: ["Bug", "Ghost", "Dark"],
  resists: ["Fighting", "Psychic"],
  immuneTo: [],
  color: "#EF4179",
};

export const Bug = {
  name: "Bug",
  superEffective: ["Psychic", "Dark", "Grass"],
  notVeryEffective: [
    "Fighting",
    "Flying",
    "Ghost",
    "Fire",
    "Steel",
    "Fairy",
    "Poison",
  ],
  noEffect: [""],
  weakTo: ["Flying", "Rock", "Fire"],
  resists: ["Fighting", "Grass", "Ground"],
  immuneTo: [""],
  color: "#A4B800",
};

export const Rock = {
  name: "Rock",
  superEffective: ["Bug", "Flying", "Fire", "Ice"],
  notVeryEffective: ["Fighting", "Ground", "Steel"],
  noEffect: [""],
  weakTo: ["Water", "Grass", "Ground", "Fighting", "Steel"],
  resists: ["Fire", "Flying", "Normal", "Poison"],
  immuneTo: [""],
  color: "#B59A47",
};

export const Ghost = {
  name: "Ghost",
  superEffective: ["Ghost", "Psychic"],
  notVeryEffective: ["Dark"],
  noEffect: ["Normal"],
  weakTo: ["Ghost", "Dark"],
  resists: ["Bug", "Poison"],
  immuneTo: ["Normal", "Fighting"],
  color: "#6666BB",
};

export const Dragon = {
  name: "Dragon",
  superEffective: ["Dragon"],
  notVeryEffective: ["Steel"],
  noEffect: ["Fairy"],
  weakTo: ["Dragon", "Fairy", "Ice"],
  resists: ["Fire", "Water", "Electric", "Grass"],
  immuneTo: [""],
  color: "#5060E1",
};

export const Dark = {
  name: "Dark",
  superEffective: ["Ghost", "Psychic"],
  notVeryEffective: ["Dark", "Fairy", "Fighting"],
  noEffect: [""],
  weakTo: ["Fighting", "Bug", "Fairy"],
  resists: ["Ghost", "Psychic"],
  immuneTo: ["Psychic"],
  color: "#614C4D",
};

export const Steel = {
  name: "Steel",
  superEffective: ["Fairy", "Ice", "Rock"],
  notVeryEffective: ["Steel", "Fire", "Water", "Electric"],
  noEffect: [""],
  weakTo: ["Fighting", "Fire", "Ground"],
  resists: [
    "Bug",
    "Dragon",
    "Flying",
    "Ice",
    "Normal",
    "Psychic",
    "Rock",
    "Steel",
    "Fairy",
    "Grass",
  ],
  immuneTo: ["Poison"],
  color: "#AAAABB",
};

export const Fairy = {
  name: "Fairy",
  superEffective: ["Dragon", "Dark", "Fighting"],
  notVeryEffective: ["Fire", "Poison", "Steel"],
  noEffect: [""],
  weakTo: ["Steel", "Poison"],
  resists: ["Bug", "Dark", "Fighting"],
  immuneTo: ["Dragon"],
  color: "#F8A5C2",
};

export const types = [
  Normal,
  Fire,
  Water,
  Electric,
  Grass,
  Ice,
  Fighting,
  Poison,
  Ground,
  Flying,
  Psychic,
  Bug,
  Rock,
  Ghost,
  Dragon,
  Dark,
  Steel,
  Fairy,
];
