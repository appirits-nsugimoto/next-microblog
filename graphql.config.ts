import type { IGraphQLConfig } from "graphql-config";
import type { CodegenConfig } from "@graphql-codegen/cli";
import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";

const config: IGraphQLConfig = {
  projects: {
    server: {
      schema: "./apps/server/src/schema/**/schema.graphql",
      extensions: {
        codegen: {
          generates: {
            "./apps/server/src/schema": defineConfig(),
            "./schema.graphql": { plugins: ["schema-ast"] },
          },
          hooks: { afterAllFileWrite: ["prettier --write"] },
        } satisfies CodegenConfig,
      },
    },
    web: {
      schema: "./schema.graphql",
    },
  },
};

export default config;
