import { Schema } from "./schema.js";
import { readdir, readFile, stat } from 'node:fs/promises';
import { join } from "node:path";
import { argv, exit } from "node:process";

if (argv.length <= 2) {
    console.log('Usage: node verify.js <PATH> [--continue-on-error]');
    exit(1);
}

const target = argv[2];
const continueOnError = argv.includes('--continue-on-error');

const targetStat = await stat(target);
const files = targetStat.isDirectory()
    ? (await readdir(target, { recursive: true }))
        .filter((file) => file.endsWith('.json'))
        .map((file) => ({ displayName: file, path: join(target, file) }))
    : [{ displayName: target, path: target }];

let hadError = false;

for (const file of files) {
    const json = await readFile(file.path, { encoding: 'utf8' });
    let description;

    try {
        description = JSON.parse(json);
    } catch (err) {
        console.log('Definition file', file.displayName, 'does not contain valid JSON.');
        console.log(err);
        hadError = true;
        if (!continueOnError) {
            exit(1);
        }
        continue;
    }

    try {
        Schema.parse(description);
    } catch (err) {
        console.log('Definition file', file.displayName, 'does not comply with the schema.');
        console.log(err);
        hadError = true;
        if (!continueOnError) {
            exit(1);
        }
        continue;
    }

    console.log('Definition', file.displayName, 'is valid.');
}

if (hadError) {
    exit(1);
}