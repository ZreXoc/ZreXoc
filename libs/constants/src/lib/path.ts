import { resolve } from 'path';

import { workspaceRoot as WORKSPACE_PATH } from '@nrwl/workspace/src/utils/app-root';

const POSTS_PATH = resolve(WORKSPACE_PATH, '_articles');

const BLOGS_PATH = resolve(POSTS_PATH, 'blogs');

export { WORKSPACE_PATH, POSTS_PATH, BLOGS_PATH };
