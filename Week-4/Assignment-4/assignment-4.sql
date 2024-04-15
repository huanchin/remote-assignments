-- CREATE TABLE article (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     title VARCHAR(30) NOT NULL,
--     content VARCHAR(1000) NOT NULL,
--     author_id INT,
--     FOREIGN KEY (author_id) REFERENCES user(id)
-- );


-- INSERT INTO article (title, content, author_id)
-- SELECT
--     CONCAT('Title ', FLOOR(RAND() * 1000)) AS title,
--     CONCAT('Content ', FLOOR(RAND() * 1000)) AS content,
--     2 AS author_id;

-- select * from article
-- select * from user

SELECT * FROM article WHERE author_id = (SELECT id FROM user WHERE email = "abc@email.com");
SELECT * FROM article WHERE id BETWEEN 7 and 12;

