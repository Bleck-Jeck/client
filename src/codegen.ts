// codegen.ts
import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "http://localhost:8080/graphql" as string,
    documents: "src/graphql/**/*.graphql",
    generates: {
        // generate types.ts
        "src/graphql/types.ts": { plugins: ["typescript"] },
        // generate operations.ts
        "src/graphql/operations.ts": {
            preset: "import-types",
            plugins: ["typescript-operations", "typescript-urql"],
            presetConfig: {
                typesPath: "types",
            },
            config: {
                withHooks: false,
            },
        },
        // generate hooks in separate files - optional
        hooks: {
            preset: "near-operation-file",
            presetConfig: {
                extension: ".hooks.tsx",
                baseTypesPath: "types.ts",
            },
            plugins: ["typescript-urql"],
            config: {
                withHooks: true,
                importOperationTypesFrom: "Operations",
                documentMode: "external",
                importDocumentNodeExternallyFrom: "./operations.tsx",
            },
        },
    },
};

export default config;

