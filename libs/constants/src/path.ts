import { resolve } from 'path';

const WORKSPACE_PATH = process.cwd();

const POSTS_PATH = resolve(WORKSPACE_PATH, '_articles');

export { WORKSPACE_PATH, POSTS_PATH };
