import express from "express";
import path from "path";
import pool from "./database.js";
const __dirname = path.resolve();
const app = express();

// Set view engine to Pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Home Page
app.get("/", (req, res) => {
  res.render("home");
});

// Sign Up
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const [result] = await pool.query(
      "SELECT COUNT(*) AS count FROM user WHERE email = ?",
      [email]
    );
    if (result[0].count === 0) {
      await pool.query("INSERT INTO user (email, password) VALUES (?, ?)", [
        email,
        password,
      ]);
      res.redirect(`/member?email=${email}`);
    } else {
      res.render("home", { errorMessage: "Email already registered" });
    }
  } catch (err) {
    console.error(err);
    // res.status(500).send("Internal Server Error");
    res.render("home", { errorMessage: "Internal Server Error" });
  }
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const [rows] = await pool.query(
      "SELECT * FROM user WHERE email = ? AND password = ?",
      [email, password]
    );
    if (rows.length > 0) {
      const email = rows[0].email;
      res.redirect(`/member?email=${email}`);
    } else {
      // res.send("Invalid email or password");
      res.render("home", { errorMessage: "Invalid email or password" });
    }
  } catch (err) {
    console.error(err);
    // res.status(500).send("Internal Server Error");
    res.render("home", { errorMessage: "Internal Server Error" });
  }
});

// Member page route
app.get("/member", (req, res) => {
  const { email } = req.query;
  res.render("member", { email });
});

// Start Server
app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});
