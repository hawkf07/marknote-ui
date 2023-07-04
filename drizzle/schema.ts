import { pgTable, pgEnum, pgSchema, AnyPgColumn, foreignKey, serial, varchar, integer } from "drizzle-orm/pg-core"

export const popularity = pgEnum("popularity", ['unknown', 'known', 'popular'])

import { sql } from "drizzle-orm"

export const cities = pgTable("cities", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 256 }),
	countryId: integer("country_id").references(() => countries.id),
	popularity: popularity("popularity"),
});

export const countries = pgTable("countries", {
	name: varchar("name", { length: 256 }).notNull(),
	id: serial("id").primaryKey().notNull(),
});