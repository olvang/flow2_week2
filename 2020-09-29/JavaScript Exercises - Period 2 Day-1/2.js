// 2
//a
function myFilter(array, callback) {
  var arrayRes = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      arrayRes.push(array[i]);
    }
  }
  return arrayRes;
}

var array2a = ['Hassan', 'Jan', 'Peter', 'Boline', 'Frederik'];
var array2aRes = myFilter(array2a, (name) => {
  return name.includes('a');
});
console.log(array2aRes);

//b
function myMap(array, callback) {
  var arrayRes = [];
  for (let i = 0; i < array.length; i++) {
    arrayRes.push(callback(array[i]));
  }
  return arrayRes;
}

var array2bRes = myMap(array2aRes, (name) => {
  let reversed = '';
  for (let char of name) {
    reversed = char + reversed;
  }
  return reversed;
});
console.log(array2bRes);
