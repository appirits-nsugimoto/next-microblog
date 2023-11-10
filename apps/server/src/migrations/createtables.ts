import { Kysely, sql } from "kysely";

export async function up(db: Kysely<unknown>) {
  await db.schema
    .createTable("posts")
    .addColumn("id", "bigserial", (col) => col.primaryKey())
    .addColumn("body", "text", (col) => col.notNull())
    .addColumn("created_at", "timestamptz", (col) =>
      col.defaultTo(sql`now()`).notNull(),
    )
    .addColumn("updated_at", "timestamptz", (col) =>
      col.defaultTo(sql`now()`).notNull(),
    )
    .execute();

  await db.schema
    .createTable("comments")
    .addColumn("id", "bigserial", (col) => col.primaryKey())
    .addColumn("post_id", "bigint", (col) =>
      col.notNull().references("posts.id").onDelete("cascade"),
    )
    .addColumn("body", "text", (col) => col.notNull())
    .addColumn("created_at", "timestamptz", (col) =>
      col.defaultTo(sql`now()`).notNull(),
    )
    .addColumn("updated_at", "timestamptz", (col) =>
      col.defaultTo(sql`now()`).notNull(),
    )
    .execute();
}

export async function down(db: Kysely<unknown>) {
  await db.schema.dropTable("comments").execute();
  await db.schema.dropTable("posts").execute();
}
