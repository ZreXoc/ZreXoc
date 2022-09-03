import { getMatterBySlug } from '@zrexoc/markdown';
import fs from 'fs'
export function getRecent(){
    return   fs
    .readdirSync(BLOGS_PATH)
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => getMatterBySlug(slug, BLOGS_PATH).data)
    .sort((a, b) => (b.time > a.time ? 1 : -1));
}