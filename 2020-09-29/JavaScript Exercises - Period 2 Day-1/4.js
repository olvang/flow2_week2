// 4
// a
var all = ['Hassan', 'Peter', 'Carla', 'Boline'];

var res4a = all.join('#');
console.log(res4a);

//b
var numbers = [2, 3, 67, 33];
const res4b = numbers.reduce((a, b) => a + b);
console.log(res4b);

//c
var members = [
  { name: 'Peter', age: 18 },
  { name: 'Jan', age: 35 },
  { name: 'Janne', age: 25 },
  { name: 'Martin', age: 22 },
];
let sum = members.reduce((acc, { age }) => acc + age, 0);
sum = sum / members.length;
console.log(sum);

//d
const votes = [
  'Biden',
  'Trump',
  'Biden',
  'Biden',
  'Trump',
  'Trump',
  'Biden',
  'None',
];

var ex4dRes = votes.reduce(function (acc, vote) {
  if (typeof acc[vote] == 'undefined') {
    acc[vote] = 1;
  } else {
    acc[vote] += 1;
  }

  return acc;
}, {});
console.log(ex4dRes);
