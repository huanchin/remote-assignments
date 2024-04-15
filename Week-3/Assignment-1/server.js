const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("<html><body><h1>Hello, My Server!</h1></body></html>");
});

app.get("/data", (req, res) => {
  const numberParam = req.query.number;

  // Case 1: Lack of Parameter
  if (!numberParam) {
    return res.json("Lack of Parameter");
  }

  // Case 2: Wrong Parameter
  if (
    isNaN(numberParam) ||
    parseInt(numberParam) != parseFloat(numberParam) ||
    parseInt(numberParam) < 1
  ) {
    return res.json("Parameter must be a positive integer");
  }

  // Case 3 and 4: Calculate sum of integers from 1 to N
  const number = parseInt(numberParam);
  const sum = (number * (number + 1)) / 2;

  res.json(`Result: ${sum}`);
});

app.get("/myName", (req, res) => {
  const userName = req.cookies.userName;
  if (userName) {
    res.send(`Hello World, ${userName}!`);
  } else {
    res.send(`
          <form action="/trackName" method="POST">
              <label for="userName">Enter your name:</label>
              <input type="text" id="userName" name="userName">
              <button type="submit">Submit</button>
          </form>
      `);
  }
});

// Handle form submission
app.post("/trackName", (req, res) => {
  const userName = req.body.userName;
  res.cookie("userName", userName);
  res.redirect("/myName");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
