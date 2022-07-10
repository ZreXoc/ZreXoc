import fs from 'fs';
import { BLOGS_PATH } from '@zrexoc/constants/path';
import { FrontMatter, getMatterBySlug } from '@zrexoc/markdown';
import { GetStaticProps } from 'next';
import { BlogContext } from '../../contexts/BlogContext';
import { PostList } from '../../components/blog/PostList';
import { useState } from 'react';
import { Detail } from '../../components/blog/Detail';

/* eslint-disable-next-line */
export interface BlogProps {
  blogList: FrontMatter[];
}

/* const BlogList: FC<{
  title: string;
  category: string;
  tags: string[];
}> = (props) => {
  return <ListItem {...props} />;
};
 */
export function Blog({ blogList }: BlogProps) {
  const [selected, selectPost] = useState(blogList[0].title);
  return (
    <BlogContext.Provider value={{ selected, selectPost }}>
      <Detail data={blogList.filter((v) => v.title === selected)[0]} />
      <div className="w-fit">
        <PostList posts={blogList} />
      </div>
    </BlogContext.Provider>
  );
}

export const getStaticProps: GetStaticProps<BlogProps> = () => {
  const blogList = fs
    .readdirSync(BLOGS_PATH)
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => getMatterBySlug(slug, BLOGS_PATH).data)
    .sort((a, b) => (b.time > a.time ? 1 : -1));

  return {
    props: {
      blogList,
    },
  };
};

export default Blog;
