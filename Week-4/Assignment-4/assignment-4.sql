-- CREATE TABLE article (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     title VARCHAR(30) NOT NULL,
--     content VARCHAR(1000) NOT NULL,
--     author_id INT,
--     FOREIGN KEY (author_id) REFERENCES user(id)
-- );

-- INSERT INTO user (email, password) VALUES ("cde@email.com", "123456");

-- INSERT INTO article (title, content, author_id)
-- SELECT
--     CONCAT('Title ', FLOOR(RAND() * 1000)) AS title,
--     CONCAT('Content ', FLOOR(RAND() * 1000)) AS content,
--     2 AS author_id;

-- select * from article
-- select * from user

-- SELECT email, title, content FROM article INNER JOIN user ON article.author_id = user.id;
-- SELECT article.id, title, content FROM article INNER JOIN user ON article.author_id = user.id WHERE user.email = "abc@email.com";
-- SELECT email, title, content FROM article RIGHT OUTER JOIN user ON article.author_id = user.id;
-- SELECT email, title, content FROM user LEFT OUTER JOIN article ON article.author_id = user.id;
-- SELECT email, COUNT(title) AS numOfArticles FROM article RIGHT OUTER JOIN user ON article.author_id = user.id GROUP BY email;
-- SELECT * FROM article WHERE author_id = (SELECT id FROM user WHERE email = "abc@email.com");
-- SELECT * FROM article INNER JOIN (SELECT id FROM user WHERE email = "abc@email.com") AS t ON article.author_id = t.id;
-- SELECT * FROM article WHERE id BETWEEN 7 and 12;


-- Question 1, Ans:
SELECT title, content, email FROM article INNER JOIN user ON article.author_id = user.id;
-- Question 2, Ans:
SELECT * FROM article ORDER BY id LIMIT 6 OFFSET 6;
