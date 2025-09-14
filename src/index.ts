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
            throw new Error(`.env file not found: ${this.file}`);
        }

        const content = fs.readFileSync(this.file, 'utf-8');
        const lines = content.split('\n');

        for (let line of lines) {
            line = line.trim();

            if (!line || line.startsWith('#')) continue;

            const [key, ...valueParts] = line.split('=');
            const value = valueParts.join('=').trim().replace(/^"|"$/g, '');

            this.variables[key.trim()] = value;

            process.env[key.trim()] = value;
        }
    }

    public get(key: string, defaultValue: string | null = null): string | null {
        return this.variables[key] ?? defaultValue;
    }
}
