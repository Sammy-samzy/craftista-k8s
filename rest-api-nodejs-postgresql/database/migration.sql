CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);
INSERT INTO users(name, email) 
SELECT 'Mike Towers','miketowers@gmail.com'
WHERE NOT EXISTS (SELECT 1 FROM users WHERE email = 'miketowers@gmail.com');

INSERT INTO users(name, email) 
SELECT 'Kenneth Johnson','kennethjohnson@gmail.com'
WHERE NOT EXISTS (SELECT 1 FROM users WHERE email = 'kennethjohnson@gmail.com');
