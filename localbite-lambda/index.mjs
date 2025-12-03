import mysql from "mysql2/promise";

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}');
    const { firebase_uid, name, email, role } = body;

    if (!firebase_uid || !name || !email || !role) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing required fields" }),
      };
    }

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    const [rows] = await connection.execute(
      "INSERT INTO users (firebase_uid, name, email, role) VALUES (?, ?, ?, ?)",
      [firebase_uid, name, email, role]
    );

    await connection.end();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Signup successful", id: rows.insertId }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Server error", error: error.message }),
    };
  }
};
