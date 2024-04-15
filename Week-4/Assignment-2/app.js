async function ajax(src, callback) {
  // your code here
  const res = await fetch(src);
  const data = await res.json();
  console.log(data);
  callback(data);
}

function render(data) {
  const products = document.querySelector(".products");
  // your code here
  // document.createElement() and appendChild() methods are preferred.
  data.forEach((item) => {
    const product = document.createElement("div");
    product.innerHTML = `<h1>${item.name}</h1>
    <p>${item.description}</p>
    <p>${item.price}</p>`;
    products.appendChild(product);
  });
}

ajax(
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products",
  function (response) {
    render(response);
  }
); // you should get product information in JSON format and render data in the page
