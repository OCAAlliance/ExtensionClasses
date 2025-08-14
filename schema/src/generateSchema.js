import { z } from 'zod/v4';
import { Schema } from "./schema.js";
import { argv } from 'node:process';
import { writeFileSync } from 'node:fs';

const schema = z.toJSONSchema(Schema);
const jsonSchema = JSON.stringify(schema, undefined, 2);

if (argv.length > 2) {
    writeFileSync(argv[2], jsonSchema);
} else {
    console.log(jsonSchema);
}
