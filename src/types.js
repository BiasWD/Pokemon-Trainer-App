export const Water = {
  name: "Water",
  superEffective: ["Ground", "Rock", "Fire"],
  notVeryEffective: ["Water", "Grass", "Dragon"],
  noEffect: [""],
  weakTo: ["Grass", "Electric"],
  resists: ["Steel", "Fire", "Water", "Ice"],
  color: "#2980EF",
};
export const Fire = {
  name: "Fire",
  superEffective: ["Bug", "Steel", "Grass", "Ice"],
  notVeryEffective: ["Rock", "Fire", "Water", "Dragon"],
  noEffect: [""],
  weakTo: ["Ground", "Rock", "Water"],
  Resists: ["Bug", "Steel", "Fire", "Grass", "Ice"],
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
  Resists: ["Ground", "Water", "Grass", "Electric"],
  color: "#3C9827",
};

export const types = [Water, Fire, Grass];
