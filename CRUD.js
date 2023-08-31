'use strict';

// TODO [ ]
const oneArr = ['React.js', 'Next.js', 'GraphQL'];

const oneArrAdd = [...oneArr, 'JavaScript ES13', 'Node.js'];

const oneArrModify = [...oneArr.slice(0, 2), 'RESTful Api', ...oneArr.slice(3)],
  oneArrCopy = [...oneArr];
oneArrCopy[0] = 'Redux.js';

const oneArrDelete = oneArr.filter((item) => item !== 'GraphQL');

// TODO { }
const oneObj = { name: 'Fred', nickName: 'Illusion', age: 0 };

const oneObjAdd = { ...oneObj, field: 'Web Development', status: 'single' };

const oneObjModify = { ...oneObj, age: 28, name: 'Alice' };

// *Delete an item using Destructuring Objects Method
const { age, nickName, ...oneObjDelete } = oneObj;

// TODO [ [ ] ]
const nestedArr = [
  ['HTML5', 'CSS3'],
  ['JavaScript', 'React.js'],
  ['Node.js', 'Express.js'],
];

const nestedArrAdd = [...nestedArr, ['GraphQL', 'RESTful API']],
  nestedArrAddItem = [...nestedArr];
nestedArrAddItem.at(0).push('Grid');

const nestedArrModifyItem = nestedArr.map((item) =>
  item.map((item) => (item === 'JavaScript' ? 'JavaScript ES13' : item))
);

const nestedArrDelete = nestedArr.filter(
    (item) => !item.includes('JavaScript')
  ),
  nestedArrayDeleteReduce = nestedArr.reduce(
    (accumulator, currentValue, currentIndex) => {
      !currentValue.includes('JavaScript') && accumulator.push(currentValue);
      return accumulator;
    },
    []
  );

const nestedArrDeleteItem = nestedArr.map((item) =>
    item.filter((item) => item !== 'JavaScript')
  ),
  nestedArrDeleteItemReduce = nestedArr.reduce(
    (accumulator, currentValue, currentIndex) => {
      const updatedNestedArr = currentValue.filter(
        (item) => item !== 'JavaScript'
      );
      accumulator.push(updatedNestedArr);
      return accumulator;
    },
    []
  );

// TODO [ { } ]
const arrObj = [
  { name: 'Fred', nickName: 'Illusion' },
  { profession: 'Junior Full Stack MERN Developer', language: 'Javascript' },
  { luckyNum: 8, favPosition: 69 },
];

const arrObjAdd = [...arrObj, { testName: 'Alisa', testAge: 0 }],
  arrObjAddItem = arrObj.find((obj) => obj.luckyNum === 8);
arrObjAddItem && (arrObjAddItem.me = 'Young');

const arrObjModify = arrObj.map((item) =>
    item.name === 'Fred' ? { ...item, language: 'JavaScriptES13' } : item
  ),
  arrObjModifyItem = arrObj.map((item) =>
    item.favPosition === 69 ? 999 : item
  );

const arrObjDelete0 = arrObj.filter(
    (item) => !item.hasOwnProperty('favPosition')
  ),
  arrObjDelete1 = arrObj.filter((item) => item.favPosition !== 69),
  arrObjDeleteItem = arrObj.map((obj) => {
    const newObj = { ...obj };
    delete newObj.favPosition;
    return newObj;
  });

// TODO { [ ] }
const objArr = {
    a: ['Fred', 'Kydd'],
    b: ['Next.js', 'React.js'],
    c: [8, 11.1, 0.5],
  },
  objArrAdd = { ...objArr, d: [69] },
  objArrAddItem = { ...objArr, a: [...objArr.a, 'Illusion'] };

const objArrModify = { ...objArr, a: ['Alice', 'Kydd'] };

const { a, ...objArrDelete } = objArr,
  objArrDeleteItem = {
    ...objArr,
    a: objArr.a.filter((item) => item != 'Kydd'),
  };

// TODO { { } }
const objObj = {
    a: { name: 'Fred', nickName: 'Illusion' },
    b: { age: 0, physicalAge: 28 },
    f: { field: 'Web', position: 'Full Stack' },
  },
  objObjAdd = {
    ...objObj,
    d: { technology: 'JavaScript', frameWork: 'Next.js' },
  },
  objObjAddItem = { ...objObj, a: { ...objObj.a, secondName: 'Kydd' } };

const objObjModify = { ...objObj, a: { ...objObj.a, name: 'Alice' } };

const { f, ...objObjDelete } = objObj,
  { f: _, ...objObjDeleteItem } = objObj;
