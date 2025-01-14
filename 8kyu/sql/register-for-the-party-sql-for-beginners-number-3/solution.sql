INSERT INTO participants (name, age, attending) VALUES ('goerge', 25, true);

SELECT * FROM participants WHERE (attending = true AND age >= 21);

