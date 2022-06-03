import { FC, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ListItem from './ListItem';
import { FrontMatter } from '@zrexoc/markdown';

export interface BlogListProps {
  [slug: string]: FrontMatter;
}

export const BlogList: FC<BlogListProps> = (props) => {
  const [transRelatedFrom, setTransRelatedFrom] = useState(0);

  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setTransRelatedFrom((ref.current?.clientHeight || 0) * 0.6);
  }, []);

  return (
    <ul
      ref={ref}
      className="h-full w-fit overflow-y-auto"
      onScroll={({ currentTarget: ele }) => {
        // console.log(transRelatedFrom, ele.scrollTop);
        setTransRelatedFrom(ele.scrollTop + ele.clientHeight * 0.6);
      }}
    >
      {Object.values(props).map((data, i) => (
        <ListItem
          key={data.title}
          {...data}
          transRelatedFrom={transRelatedFrom}
        />
      ))}
    </ul>
  );
};

export default BlogList;
