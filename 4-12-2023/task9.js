const numbers = [1, 2, 3];
const index = numbers.indexOf(1);
if (index > -1) {
  numbers.splice(index, 1);
}
console.log(numbers);