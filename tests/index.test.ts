import { Env } from '../src/index';
import { join } from 'path';

describe('Env Loader', () => {
    let env: Env;

    beforeAll(() => {
        env = new Env(join(__dirname, '.env.example'));
    });

    it('should load variables from .env file', () => {
        expect(env.get('APP_NAME')).toBe('codemonster-env');
        expect(env.get('APP_ENV')).toBe('local');
        expect(env.get('APP_DEBUG')).toBe('true');
    });

    it('should set variables in process.env', () => {
        expect(process.env.APP_NAME).toBe('codemonster-env');
        expect(process.env.APP_ENV).toBe('local');
        expect(process.env.APP_DEBUG).toBe('true');
    });

    it('should return default value if variable does not exist', () => {
        expect(env.get('UNKNOWN', 'default')).toBe('default');
    });
});
