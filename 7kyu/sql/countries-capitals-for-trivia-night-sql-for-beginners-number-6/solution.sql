SELECT capital
FROM countries
WHERE continent IN ('Afrika', 'Africa') 
AND country LIKE 'E%'
ORDER BY capital ASC
LIMIT 3;


