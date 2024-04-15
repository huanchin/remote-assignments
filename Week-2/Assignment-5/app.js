function binarySearchPosition(numbers, target) {
  // your code here
  let min = 0;
  let max = numbers.length - 1;

  while (min <= max) {
    let middle = Math.floor((max + min) / 2);
    if (target < numbers[middle]) max = middle - 1;
    else if (target > numbers[middle]) min = middle + 1;
    else if (target === numbers[middle]) return middle;
  }

  return -1;
}
console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3
console.log(binarySearchPosition([1, 2, 5, 6, 7], 2));
console.log(binarySearchPosition([1, 2, 5, 6, 7], 7));
