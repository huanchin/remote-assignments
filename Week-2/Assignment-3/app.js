function count(input) {
  // your code here
  const result = {};
  input.forEach((str) => {
    if (!result[str]) result[str] = 1;
    else result[str]++;
  });
  return result;
}
let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1)); // should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
  // your code here
  const result = {};
  input.forEach((obj) => {
    if (!result[obj.key]) result[obj.key] = obj.value;
    else result[obj.key] += obj.value;
  });
  return result;
}

let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];

console.log(groupByKey(input2)); // should print {a:6, b:1, c:7}
