# AES70 ExtensionClasses Schema

This folder contains the schema for extension classes. The schema is written in JavaScript using
the [zod](https://zod.dev/) schema validation library. The schema is also available as a JSON schema
in [schema.json](./schema.json).

## Scripts

This subdirectory contains a series of scripts to work with the zod schema. The scripts are written in JavaScript
for NodeJS. In order to install dependencies run `npm ci`.

### Validating

To validate extension classes in this repository run `npm run verify`.

### Generating the JSON schema

The current version of the JSON schema is commited to the git repository. However, if the original
zod definition in [./src/schema.js](./src/schema.js) has been modified, the JSON schema has to be
re-generated. This can be done by running `npm run generate`.

