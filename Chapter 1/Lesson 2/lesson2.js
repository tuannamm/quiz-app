class Person {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  getAddress() {
    return "I live in" + this.address;
  }
}

const test = new Person("Nguyen Tran Tuan Nam", "Sai Gon");
console.log("My name is " + test.name);
console.log("My address is " + test.getAddress());

class Animals {
  constructor() {
    this.type = type;
  }
  doAction() {
    return "Go go away";
  }
}

class Dog extends Animals {
  constructor(model) {
    super();
    this.model = model;
  }
}
const myDog = new Dog("Pug");
console.log(myDog.doAction());
