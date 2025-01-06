import { execSync } from 'child_process';

export function remarkFileTime() {
  return function (tree, file) {
    const filepath = file.history[0];
    const lastModified = execSync(`git log -1 --pretty="format:%cI" "${filepath}"`);
    const createdAt = execSync(`git log --diff-filter=A --follow --pretty="format:%cI" "${filepath}"`);
    file.data.astro.frontmatter.lastModified = lastModified.toString();
    file.data.astro.frontmatter.createdAt = createdAt.toString();
  };
}
