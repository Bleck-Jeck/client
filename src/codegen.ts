import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:8080/graphql",
  documents: "src/graphql/**/*.graphql",
  generates: {
    "src/graphql/types.ts": { plugins: ["typescript"] },
    "src/graphql/operations.ts": {
      preset: "import-types",
      plugins: ["typescript-operations", "typescript-urql"],
      presetConfig: {
        typesPath: "./types", // Без расширения для согласованности
      },
      config: {
        withHooks: false,
      },
    },
    "src/graphql/hooks": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".hooks.tsx",
        baseTypesPath: "./types.ts",
      },
      plugins: ["typescript-urql"],
      config: {
        withHooks: true,
        importOperationTypesFrom: "./operations", // Без .ts или .tsx для TypeScript
        documentMode: "external",
        importDocumentNodeExternallyFrom: "./operations",
      },
    },
  },
};

export default config;

