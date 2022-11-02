const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
const thirdArray = [...firstArray, ...secondArray];
const fourthArray = [...secondArray, ...firstArray];

let myArr = ["Tuan Nam", "Best", "Dev"];
myArr = [...myArr, "Vip", "Pro"];

console.log(myArr);

const test = { name: "Tuan Nam", age: 21 };
const newTest = { ...test, hair: "black" };
console.log(newTest);

const myVehicle = {
  brand: "Toyota",
  model: "Camry",
  color: "black",
};

const updateMyVehicle = {
  type: "car",
  year: 2022,
  color: "white",
};
console.log({ ...myVehicle, ...updateMyVehicle });

const sum = (x, y, z) => {
  return x + y + z;
};
console.log(sum(...firstArray));
