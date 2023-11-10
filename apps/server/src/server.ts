import { createYoga, createSchema } from "graphql-yoga";
import { createServer } from "http";
import { typeDefs } from "./schema/typeDefs.generated";
import { resolvers } from "./schema/resolvers.generated";

if (process.env.NODE_ENV === "development") {
  import("./migrator").then(({ migrator }) => {
    migrator.migrateToLatest();
  });
}

const yoga = createYoga({
  schema: createSchema({ typeDefs, resolvers }),
});
const server = createServer(yoga);
const port = process.env.PORT ?? 8787;
server.listen(port, () => {
  console.info(`🚀 Server ready at http://localhost:${port}/graphql`);
});
