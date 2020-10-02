// 1
//a
var array1a = ['Hassan', 'Jan', 'Peter', 'Boline', 'Frederik'];
var array1aRes = array1a.filter((name) => {
  return name.includes('a');
});
console.log(array1aRes);

//b
var array1bRes = array1aRes.map((name) => {
  let reversed = '';
  for (let char of name) {
    reversed = char + reversed;
  }
  return reversed;
});
console.log(array1bRes);
