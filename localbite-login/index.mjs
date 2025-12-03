import mysql from 'mysql2/promise';

const dbConfig = {
  host: 'localbite-db.cp66cyiawjia.eu-north-1.rds.amazonaws.com',
  user: 'admin',
  password: 'localbite123',
  database: 'localbite'
};

export const handler = async (event) => {
  let body;

  try {
    // Parse incoming JSON
    body = typeof event.body === "string" ? JSON.parse(event.body) : event.body;

    const { email } = body;
    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Email is required" })
      };
    }

    // Connect to DB
    const connection = await mysql.createConnection(dbConfig);

    // Check if user exists
    const [rows] = await connection.execute(
      'SELECT * FROM users WHERE email = ? LIMIT 1',
      [email]
    );

    await connection.end();

    if (rows.length > 0) {
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type"
        },
        body: JSON.stringify({
          message: "Login successful",
          role: rows[0].role,
          name: rows[0].name,
          email: rows[0].email
        })
      };
    } else {
      return {
        statusCode: 404,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type"
        },
        body: JSON.stringify({ message: "User not found" })
      };
    }

  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      },
      body: JSON.stringify({ message: "Internal server error", error: error.message })
    };
  }
};
