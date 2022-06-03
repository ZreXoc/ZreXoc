import { FC, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export interface ListItemProps {
  title: string;
  category: string;
  tags: string[];
  transRelatedFrom?: number;
}

export const ListItem: FC<ListItemProps> = ({
  title,
  category,
  tags,
  transRelatedFrom = 0,
}) => {
  const [trans, setTrans] = useState(0);
  const listRef = useRef<HTMLLIElement>(null);
  useEffect(() => {
    setTrans(
      transRelatedFrom
        ? Math.abs((listRef.current?.offsetTop || 0) - transRelatedFrom)
        : 0
    );
  }, [transRelatedFrom]);
  return (
    <li
      ref={listRef}
      className="list-none relative w-[546.67px] h-[80px] my-3"
      style={{
        transform: `translateX(${trans}px)`,
      }}
    >
      <Image
        className="absolute left-0 top-0 right-0 bottom-0 z-0"
        src="/blog/ListItem.svg"
        layout="fill"
      ></Image>
      <div className="relative z-10 h-full leading-[0]">
        <span className="table-cell h-[59px] w-full pl-14 align-middle text-3xl">
          {title}
        </span>
        <br />
        <span className="table-cell h-[21px] w-full pl-16 align-middle text-sm">
          {`${category} | ${tags.join(',')}`}
        </span>
      </div>
    </li>
  );
};

export default ListItem;
