import fs from 'fs';
import { join } from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import { FrontMatter, MarkdownRenderingResult } from './types';
import { DEFAULT_AUTHOR } from '@zrexoc/constants/meta';

export const getParsedFileContentBySlug = async (
  slug: string,
  postsPath: string
): Promise<MarkdownRenderingResult> => {
  const postFilePath = join(postsPath, `${slug}.mdx`);
  const fileContents = fs.readFileSync(postFilePath);

  const { data, content } = matter(fileContents);

  const frontMatter: FrontMatter = {
    ...(data as FrontMatter),
    author: DEFAULT_AUTHOR,
  };

  const html = await renderMarkdown(content);

  return {
    frontMatter,
    html,
  };
};

export const renderMarkdown = (markdownContent: string) => {
  return serialize(markdownContent || '');
};
