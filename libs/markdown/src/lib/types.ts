import { MDXRemoteSerializeResult } from 'next-mdx-remote';

new Date().toISOString;

export type FrontMatter = {
  title: string;
  extract: string;
  time: string;
  update?: Array<{
    version: string;
    describe: string;
  }>;
  author?: { name: string };
};

export type MarkdownRenderingResult = {
  frontMatter: FrontMatter;
  html: MDXRemoteSerializeResult;
};
