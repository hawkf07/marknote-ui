import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

const client = new Pool({
  connectionString: process.env.POSTGRES_CONNECTION_STRING as string,
});

export const db = drizzle(client, { schema });
