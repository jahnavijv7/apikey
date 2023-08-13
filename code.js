const { v4: uuidv4 } = require('uuid');
const apiKey = uuidv4(); 
const mysql = require('mysql2/promise');

async function storeApiKey(apiKey) {
  const connection = await mysql.createConnection({
    host: 'your-database-host',
    user: 'your-username',
    password: 'your-password',
    database: 'your-database-name',
  });

  const query = 'INSERT INTO api_keys (key) VALUES (?)';
  await connection.execute(query, [apiKey]);

  connection.end(); // Close the database connection
}

// Call the function to store the API key
storeApiKey(apiKey);

