import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

// MySQL Connection Pool
const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: "assignment",
  })
  .promise();

export default pool;
// async function getAllUsers() {
//   const [rows] = await pool.query("SELECT * FROM user");
//   return rows;
// }

// const users = await getAllUsers();
// console.log(users);

// async function getUser(email) {
//   const [rows] = await pool.query(
//     "SELECT COUNT(*) AS count FROM user WHERE email = ?",
//     [email]
//   );
//   return rows;
// }

// const user = await getUser("abc@email.com");
// console.log(user[0]);
