import fs from 'fs';
import { join } from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import { FrontMatter, MarkdownRenderingResult } from './types';

export const getMatterBySlug = (slug: string, postsPath: string) => {
  const postFilePath = join(postsPath, `${slug}.mdx`);
  const fileContents = fs.readFileSync(postFilePath);

  const m = matter(fileContents);
  return {
    ...m,
    data: { slug, ...m.data } as FrontMatter,
  };
};

export const getParsedFileContentBySlug = async (
  slug: string,
  postsPath: string
): Promise<MarkdownRenderingResult> => {
  const { data, content } = getMatterBySlug(slug, postsPath);

  const html = await renderMarkdown(content);

  return {
    frontMatter: data,
    html,
  };
};

export const renderMarkdown = (markdownContent: string) => {
  return serialize(markdownContent || '');
};
