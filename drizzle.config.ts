import { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default {
  schema: "./src/db/schema.ts",
  driver: "pg",
  out: "./drizzle",
  dbCredentials: {
    database: "drizzle_orm_test",
    user: "postgres",
    host: "127.0.0.1",
    password: "postgres",
    port: 5432,
  },
} satisfies Config;
