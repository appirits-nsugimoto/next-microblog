import { createYoga, createSchema } from "graphql-yoga";
import { createServer } from "http";
import { typeDefs } from "./schema/typeDefs.generated";
import { resolvers } from "./schema/resolvers.generated";

const yoga = createYoga({
  schema: createSchema({ typeDefs, resolvers }),
});
const server = createServer(yoga);
const port = process.env.PORT ?? 8080;
server.listen(port, () => {
  console.info(`🚀 Server ready at http://localhost:${port}/graphql`);
});
