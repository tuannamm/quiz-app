// map

const myArray = ["apple", "banana", "orange", "watermelon"];
const myList = myArray.map((item) => `<p>${item}</p>`);

const numberList = [1, 2, 3, 4, 5];
const myNumberList = numberList.map((number) => {
  return number * 2;
});

console.log(myList, myArray);

console.log(numberList, myNumberList);

const newArray = [];

for (let i = 0; i < numberList.length; i++) {
  let item = numberList[i] * 2;
  newArray.push(item);
}

console.log(newArray);

// filter

const age = [18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40];
const result = age.filter((age) => age > 30);
console.log(result);
