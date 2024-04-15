const welcomeBlock = document.querySelector(".welcome");
const welcomeMessage = welcomeBlock.children[0];
const button = document.querySelector(".button").children[0];
const hiddenBlocks = document.querySelector("#hidden");

// request 1
welcomeBlock.addEventListener("click", () => {
  welcomeMessage.textContent = "Have a Good Time!";
});

// request 2
button.addEventListener("click", () => {
  hiddenBlocks.style.display = "flex";
});
