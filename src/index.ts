import fs from 'fs';
import path from 'path';

export class Env {
    private file: string;
    private variables: Record<string, string> = {};

    constructor(file: string = '.env') {
        this.file = path.resolve(process.cwd(), file);
        this.load();
    }

    private load(): void {
        if (!fs.existsSync(this.file)) {
            console.warn(`⚠️ .env file not found: ${this.file}, using defaults`);

            return;
        }

        const content = fs.readFileSync(this.file, 'utf-8');
        const lines = content.split(/\r?\n/);

        for (let line of lines) {
            line = line.trim();

            if (!line || line.startsWith('#')) continue;

            const [key, ...valueParts] = line.split('=');
            const rawValue = valueParts.join('=').trim();
            const value = rawValue.replace(/^['"]|['"]$/g, '');

            this.variables[key.trim()] = value;

            if (process.env[key.trim()] === undefined) {
                process.env[key.trim()] = value;
            }
        }
    }

    public get(key: string, defaultValue: string | null = null): string | null {
        return this.variables[key] ?? process.env[key] ?? defaultValue;
    }
}

let defaultEnv: Env | null = null;

export function loadEnv(file: string = '.env') {
    defaultEnv = new Env(file);

    return defaultEnv;
}

export function env(key: string, defaultValue: string | null = null): string | null {
    if (!defaultEnv) {
        defaultEnv = new Env();
    }

    return defaultEnv.get(key, defaultValue);
}
