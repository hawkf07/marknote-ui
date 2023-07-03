import { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  driver: "pg",
  out: "./drizzle",
  dbCredentials: {
    connectionString: process.env.POSTGRES_CONNECTION_STRING as string,
  },
} satisfies Config;
