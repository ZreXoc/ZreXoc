import fs from 'fs';
import { BLOGS_PATH } from '@zrexoc/constants/path';
import { FrontMatter, getMatterBySlug } from '@zrexoc/markdown';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { ListItem } from '@zrexoc/shared/ui';
import { FC } from 'react';

/* eslint-disable-next-line */
export interface BlogProps {
  blogList: {
    [slug: string]: FrontMatter;
  };
}

const BlogList: FC<{
  title: string;
  category: string;
  tags: string[];
}> = (props) => {
  return <ListItem {...props} />;
};

export function Blog({ blogList }: BlogProps) {
  return (
    <div>
      <h1>Welcome to my blog!</h1>
      <ul>
        {Object.values(blogList).map((data) => (
          <BlogList key={data.title} {...data} />
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const blogList = {};
  fs.readdirSync(BLOGS_PATH)
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ data: getMatterBySlug(slug, BLOGS_PATH).data, slug }))
    .forEach(({ data, slug }) => (blogList[slug] = data));

  return {
    props: {
      blogList,
    },
  };
};

export default Blog;
