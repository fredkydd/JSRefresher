'use strict';
import * as All from './util.js';
import simple from './util.js';
import { me, apiKey as key } from './util.js';

console.log(me, key);
console.log(simple);

console.log(All.me);
// !import export can only run on nodejs

const user = {
  name: 'Fred',
  age: 28,
  greet() {
    console.log('Hello!');
    console.log(this.name);
    // const same = this.age;
  },
};

console.log(user);
user.greet();

// *C L A S S
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log('Hi from Constructor!');
  }
}

const employee = new User('Fred', 28);
console.log(employee);

// TODO map()
const ielts = ['Grammar', 'Writing', 'Listening', 'Speaking'],
  index = ielts.findIndex((item) => item === 'Listening'),
  changedIelts = ielts.map((item) => ({ ieltsExamTypes: item }));

console.log(`Listening's index's ${index}\n${changedIelts}`);
console.log(changedIelts);

// TODO DESTRUCTURING [ ]
// *property names names can be different from keys
const [firstName, secondName] = ['Fred', 'Kydd'];
console.log(`firstName: ${firstName}\nsecondName: ${secondName}`);

// TODO DESTRUCTURING { }
// *property names must be same
// *Both side must be object
const { name, age } = { name: 'Fred', age: 19 };
console.log(`name: ${name}\nage: ${age}`);

// *We can add alias for destructuring property name
const { name: devName, age: devAge } = { name: 'Fred', age: 19 };
console.log(`devName: ${devName}\ndevAge: ${devAge}`);

// TODO DESTRUCTURING () =>
function storeOrder({ id, currency }) {
  // destructuring
  localStorage.setItem('id', id);
  localStorage.setItem('currency', currency);
  console.log(id, currency);
}
storeOrder({ id: '548dhd', currency: 'eur' });

// TODO Spread Operator [...Array]
// *the operator PULLS OUT THE VALUES from arrays merges into new one
const hobbies = ['Running', 'Dreaming'],
  nested = [['nestedValue0', 'nestedValue1']],
  mustToDo = [587, 8, 11];

const newArray = ['first', ...hobbies, ...mustToDo, ...nested.at(0), 'last'];
console.log(newArray);
// *["first", "Running", "Dreaming", 587, 8, 11, 'nestedValue0', 'nestedValue1', "last"]

// TODO Merging [ [ ] ]
// *Normal merging Arrays to another one without spread operator
// *it will create 2 new array inside of a new one
const arr0 = ['test0', 'test1'],
  arr1 = [69, 33];

const mergedArr = [arr0, arr1];
console.log(mergedArr);
// *[ [arr0], [arr1] ]

// TODO Spread Operator { ...Object }
const extendedDev = {
    age: 19,
    company: { name: 'Unknown', address: 'East 77th Street 9001' },
  },
  extended1 = { projectName: 'Alpha' },
  dev = {
    ...extended1,
    position: 'Senior',
    ...extendedDev,
    // ...extendedDev.company,
  };

console.log(extendedDev);
console.log(dev);
// *{ projectName: 'Alpha', name: "Unknown", position: "Senior", age: 19, company: Object, address: "East 77th Street 9001" }

// TODO Control structure () ? :
const password = 'Hello';
// const password = prompt("What's your password ?")

if (password === 'Hello') {
  console.log('Hello works!');
} else if (password === 'hello') {
  console.log('hello works!');
} else {
  console.log('Access is not granted!');
}

// *Same control structure with ternary operator instead of conditional function
// TODO (condition) ? value_if_true : value_if_false
// *if the condition's true it RETURNS value_if_true statement stops at return && will not execute other conditions || lines
// *If the condition's not true it RETURNS value_if_false and finish the executing || stops there
// !(condition) ? return_if_true : (condition) ? return_if_true : return_if_false

password === 'Hello'
  ? console.log('Hello on ternanry')
  : password === 'hello'
  ? console.log('hello on ternary')
  : console.log('Access is not granted!');

const hobbyExamples = ['Listening', 'Reading', 'Watching'];
for (const hobby of hobbyExamples) {
  // todo every time hobby is recreated it not assign
  // *const hobby = 'Listening;
  // *const hobby = 'Reading;
  // *const hobby = 'Watching;
  console.log(hobby);
}

// *iterator - yineleyici
// for (const iterator of object) {}

// todo DOM Manipulating
const list = document.querySelector('ul');
list.remove();

// TODO Functions as values
// *arrow function can't accept name, however can be assigned to the constant || variable
// function she() {}
// () => {};
// const she = () => {};
