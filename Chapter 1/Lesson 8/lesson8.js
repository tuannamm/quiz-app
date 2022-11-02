const person = {
  name: "Nguyen Tran Tuan Nam",
  age: 21,
  address: "Sai Gon",
};
// const name = person.name;
// const age = person.age;
// console.log(age, name);

const { name, age } = person;
console.log(name, age);

const city = ["HCM", "HN", "DN"];
const [hcm, hn, dn] = city;
console.log(hcm, hn, dn);
