import { FileMigrationProvider, Migrator } from "kysely";
import { db } from "./database";
import { promises as fs } from "node:fs";
import * as path from "node:path";

export const migrator = new Migrator({
  db,
  provider: new FileMigrationProvider({
    fs,
    path,
    migrationFolder: path.join(__dirname, "migrations"),
  }),
});
