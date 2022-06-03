import { FC, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ListItem from './ListItem';
import { FrontMatter } from '@zrexoc/markdown';

export interface BlogListProps {
  posts: { [slug: string]: FrontMatter };
}

export const BlogList: FC<BlogListProps> = ({ posts }) => {
  const [transRelatedFrom, setTransRelatedFrom] = useState(0);

  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setTransRelatedFrom((ref.current?.clientHeight || 0) * 0.6);
  }, []);

  return (
    <ul
      ref={ref}
      className="h-full w-fit overflow-x-hidden overflow-y-auto"
      onScroll={({ currentTarget: ele }) => {
        // console.log(transRelatedFrom, ele.scrollTop);
        setTransRelatedFrom(ele.scrollTop + ele.clientHeight * 0.7);
      }}
    >
      {Object.values(posts).map((post) => (
        <ListItem
          key={post.title}
          {...post}
          transRelatedFrom={transRelatedFrom}
        />
      ))}
    </ul>
  );
};

export default BlogList;
