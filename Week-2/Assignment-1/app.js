function max(numbers) {
  // your code here, for-loop method preferred
  if (numbers.length === 0) {
    return undefined; // return undefined if the array is empty
  }
  let maxNumber = numbers[0]; // initialize maxNumber with the first element
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i]; // update maxNumber if a larger number is found
    }
  }
  return maxNumber;
}
function findPosition(numbers, target) {
  // your code here, for-loop method preferred
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      return i; // return the index if the target is found
    }
  }
  return -1; // return -1 if the target is not found
}
console.log(max([1, 2, 4, 5])); // should print 5
console.log(max([5, 2, 7, 1, 6])); // should print 7
console.log(findPosition([5, 2, 7, 1, 6], 5)); // should print 0
console.log(findPosition([5, 2, 7, 1, 6], 7)); // should print 2
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); // should print 2 (the first position)
console.log(findPosition([5, 2, 7, 1, 6], 8)); // should print -1
