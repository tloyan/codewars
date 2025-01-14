-- ALTER TABLE greetings
-- ADD user_id VARCHAR(255);

-- UPDATE greetings SET user_id = SUBSTRING(greeting FROM '#(\d+)');

SELECT name, greeting, SUBSTRING(greeting FROM '#(\d+)') AS user_id
FROM greetings;