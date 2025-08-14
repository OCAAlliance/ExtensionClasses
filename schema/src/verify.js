import { Schema } from "./schema.js";
import { readdir, readFile } from 'node:fs/promises';
import { join } from "node:path";
import { argv, exit } from "node:process";

if (argv.length <= 2) {
    console.log('Usage: node verify.js <DIRECTORY>');
    exit(1);
}

const dir = argv[2];

const files = await readdir(dir, {
    recursive: true,
});

for (const file of files) {
    if (!file.endsWith('.json')) continue;
    const path = join(dir, file);
    
    const json = await readFile(path, { encoding: 'utf8' });
    let description;
    
    try {
        description = JSON.parse(json);
    } catch (err) {
        console.log('Definition file', file, 'does not contain valid JSON.');
        console.log(err);
        exit(1);
    }

    try {
        Schema.parse(description);
    } catch (err) {
        console.log('Definition file', file, 'does not comply with the schema.');
        console.log(err);
        exit(1);
    }

    console.log('Definition', file, 'is valid.');
}