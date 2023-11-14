### Steps to configure typed Schema

1. npm install -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-resolvers
2. npx graphql-codegen init
3. Setup with necessary configuration and finally run codegen script (npm run codegen)
4. Once executed this will create the typed graphql schema in the mentioned location

### Steps to configure typed resolvers

1. Change type of resolver from any to Resolvers, this will throw some errors
2. Search for typescript resolvers plugin from https://the-guild.dev/graphql/codegen/plugins
3. npm i -D @graphql-codegen/typescript-resolvers
4. Search for mappers and provide mappers under config. The path to the mapping should be relative to the typed schema
5. The thrown errors from the resolvers will be removed now

### Steps to configure typed context

1. export an interface for context from resolver
2. Keeping all the attributes passed in the context while initialisation
3. Finally set "contextType": "../resolvers#ResolverContext" under config in codegen.json to change the context type for the resolver
4. To live update the schema use npx graphql-codegen --config codegen.json --watch
