import { FC, useEffect, useRef, useState } from 'react';
import { ListItem } from './ListItem';
import { FrontMatter } from '@zrexoc/markdown';

export interface PostListProps {
  posts: FrontMatter[];
}

export const PostList: FC<PostListProps> = ({ posts }) => {
  const [transRelatedFrom, setTransRelatedFrom] = useState<number>(0);

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
      {posts.map((post) => (
        <ListItem
          key={post.title}
          {...post}
          transRelatedFrom={transRelatedFrom}
        />
      ))}
    </ul>
  );
};
