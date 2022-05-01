import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { BLOGS_PATH } from '@zrexoc/constants/path';
import { getParsedFileContentBySlug } from '@zrexoc/markdown';
import { MarkdownRenderingResult } from '@zrexoc/markdown';

type BlogProps = MarkdownRenderingResult;

const Blog: NextPage<BlogProps> = ({ frontMatter, html }) => {
  return (
    <div className="md:container md:mx-auto overflow-y-auto">
      <article className="mx-auto prose lg:prose-xl w-full self-center">
        <h1>{frontMatter.title}</h1>
        <div>by {frontMatter.author.name}</div>
        <hr />

        <MDXRemote {...html} />
      </article>
    </div>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const articleMarkdownContent = await getParsedFileContentBySlug(
    params.slug,
    BLOGS_PATH
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
    .readdirSync(BLOGS_PATH)
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
