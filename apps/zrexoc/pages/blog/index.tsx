import fs from 'fs';
import { BLOGS_PATH } from '@zrexoc/constants/path';
import { FrontMatter, getMatterBySlug } from '@zrexoc/markdown';
import { GetStaticProps } from 'next';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface BlogProps {
  blogList: {
    [slug: string]:FrontMatter
  };
}

export function Blog({ blogList }: BlogProps) {
  return (
    <div>
      <h1>Welcome to my blog!</h1>
      <ul>
        {
          Object.keys(blogList).map((slug)=>
          <li key={slug}><Link href={`/blog/${slug}`}><a>{blogList[slug].title}:{ blogList[slug].excerpt}</a></Link></li>)
        }
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const blogList={};
   fs
    .readdirSync(BLOGS_PATH)
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({data:getMatterBySlug(slug, BLOGS_PATH).data, slug}))
    .forEach(({data, slug}) => blogList[slug]=data);

  return {
    props: {
      blogList,
    },
  };
};

export default Blog;
