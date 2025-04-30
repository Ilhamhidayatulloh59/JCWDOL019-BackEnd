import "dotenv/config";
import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: 5432,
  idleTimeoutMillis: 60000,
});

pool.on("connect", (client) => {
  client
    .query("SET search_path TO test")
    .then(() => console.log("Success connection test"))
    .catch((err) => console.error("Failed to set search_path", err.stack));
});

export default pool;
