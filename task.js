'use strict';
const fidan = [
  ['me', 8, null],
  { user: { name: 'Fidan', pussyType: 'wide', age: 19 } },
  [99, 9],
];

const zahra = fidan.map((item) =>
  Array.isArray(item)
    ? item
        .map((value) => (value === 9 ? 88 : value))
        .filter((value) => value !== null)
    : item.user &&
      item.user.pussyType === 'wide' && {
        ...item,
        user: {
          // *pulls out and copy
          ...item.user,
          // *modified
          pussyType: 'narrow',
          // modified
          name: 'Zahra',
          // *added
          secondName: 'Aghayeva',
        },
      }
);

console.log(zahra);

// !(condition) ? return_if_true : (condition) ? return_if_true : return_if_false

// *1. **First Run**: The first element of the `fidan` array is `['me', 8, null]`. The first condition, `Array.isArray(item)`, is true, so it goes into the ternary expression's first branch. Here, `return_if_true(map)` corresponds to the `map` operation, and `return_if_true(filter)` corresponds to the `filter` operation. The `map` operation processes the array, and then the `filter` operation removes the `null` value. So, the result for this element is `['me', 8]`.

// *2. **Second Run**: The second element is an object. The first condition, `Array.isArray(item)`, is false. However, the nested condition `item.user && item.user.pussyType === 'wide'` is true. So, it goes into the second branch of the ternary expression. Here, `return_if_true` corresponds to modifying the properties of the object as you described.

// *3. **Third Run**: The third element is `[99, 9]`. The first condition, `Array.isArray(item)`, is true, so it goes into the ternary expression's first branch. Here, `return_if_true(map)` corresponds to the `map` operation that changes the value `9` to `88`, and then `return_if_true(filter)` corresponds to the `filter` operation that removes `null`. So, the result for this element is `[99, 88]`.
