import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { POSTS_PATH } from '@zrexoc/constants/path';
import { getParsedFileContentBySlug, renderMarkdown } from '@zrexoc/markdown';
import { MarkdownRenderingResult } from '@zrexoc/markdown';

type ArticleProps = MarkdownRenderingResult;

const Article: NextPage<ArticleProps> = ({ frontMatter, html }) => {
  return (
    <div className="md:container md:mx-auto">
      <article>
        <h1 className="text-3xl font-bold hover:text-gray-700 pb-4">
          {frontMatter.title}
        </h1>
        <div>by {frontMatter.author.name}</div>
        <hr />

        <MDXRemote {...html} />
      </article>
    </div>
  );
};

export default Article;

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const articleMarkdownContent = await getParsedFileContentBySlug(
    params.slug,
    POSTS_PATH
  );

  return {
    props: {
      frontMatter: articleMarkdownContent.frontMatter,
      html: articleMarkdownContent.html,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fs
    .readdirSync(POSTS_PATH)
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  // console.log(paths);

  return {
    paths,
    fallback: false,
  };
};
