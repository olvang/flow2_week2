// 3
//a
var numbers = [1, 3, 5, 10, 11];

//b
var array3b = ['Hassan', 'Peter', 'Jan', 'Boline'];
var array3bRes = array3b.map((name) => {
  return '<a href="">' + name + '</a>';
});
var ex3bRes = '<nav>' + array3bRes.join('') + '</nav>';
console.log(ex3bRes);

//c
var persons = [
  { name: 'Hassan', phone: '1234567' },
  { name: 'Peter', phone: '675843' },
  { name: 'Jan', phone: '98547' },
  { name: 'Boline', phone: '79345' },
];

var array3cRes = persons.map((person) => {
  return (
    '<tr><td>' + person.name + '</td>' + '<td>' + person.phone + '</td></tr>'
  );
});
var ex3cRes =
  '<table><tr><th>Name</th><th>phone</th>' + array3cRes.join('') + '</table>';
console.log(ex3cRes);
