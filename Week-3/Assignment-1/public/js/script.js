const number = document.getElementById("numberInput");
const calcSum = document.getElementById("calcSum");
const answer = document.getElementById("ans");

console.log(number);
console.log(calcSum);

async function fetchSum(num) {
  try {
    const res = await fetch(`http://localhost:3000/data?number=${num}`);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    alert("fail to fetch sum!");
  }
}

calcSum.addEventListener("click", async () => {
  const input = number.value;
  if (!input) {
    alert("please enter a positive number!");
    return;
  }
  console.log(input);
  answer.textContent = await fetchSum(input);
});
