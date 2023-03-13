const { config } = require("dotenv");
config();
module.exports = {
  schema: [
   {
      "http://localhost:8000/graphql": {
        "headers": {
          "apikey": "someapikey"
        }
      }
    }
  ],
  documents: "./**/*{.graphql,.gql}",
  overwrite: true,
  generates: {
    "./generated/generated.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
